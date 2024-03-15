import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { experiences } from "@/experiences";
import useLocalStorageState from "use-local-storage-state";
import Animation from "@/components/3DAnimation/3DAnimation";
import NavButton from "@/components/NavButton/NavButton";
import PageDisplay from "@/components/PageDisplay/PageDisplay";
import PlayButton from "@/components/PlaySound/PlayButton";
import PlaySound from "@/components/PlaySound/PlaySound";
import memory from "@/public/sounds/memory.mp3";
import * as Styled from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import useSWR from "swr";

export default function Flow() {
  const router = useRouter();
  const { mutate } = useSWR("/api/entries");
  const [allEntries, setAllEntries] = useLocalStorageState("anonymous_moods", {
    defaultValue: [],
  });
  const [experience, setExperience] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [color, setColor] = useState("grey");
  const [page, setPage] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const guides = [
    "share your emotions ...",
    "breathe",
    "think about your day",
    "how do you feel?",
    "what do you feel right now?",
    "how intense is this feeling for you?",
    "what's your reaction?",
  ];

  function handleSelectExperience(tags) {
    setExperience(tags);
    setColor(tags[0].color);
  }

  function handleSelectReactions(tags) {
    setReactions(tags);
  }

  function handleSliderChange(event) {
    setSliderValue(event.target.value);
  }

  function handleIsPlaying() {
    setAudioPlaying(!audioPlaying);
  }

  async function handleSave() {
    const reactionsArray = reactions.map((reaction) => reaction.name);
    const response = await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: new Date().toLocaleString(),
        user: "anonymous",
        location: "unknown",
        experience: experience[0].name,
        color: experience[0].color,
        intensity: sliderValue,
        reactions: reactionsArray,
      }),
    });

    if (response.ok) {
      mutate();
      router.push("entries");
    }
  }

  const button = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
      },
    },
  };

  return (
    <>
      <Animation color={color} opacity={sliderValue} />
      <Styled.Container>
        {page > 0 && (
          <>
            {audioPlaying && (
              <PlaySound
                src={memory}
                audioPlaying={audioPlaying}
                pageIndex={page}
              />
            )}
          </>
        )}
        {page === 1 && (
          <PlayButton
            handleIsPlaying={handleIsPlaying}
            audioPlaying={audioPlaying}
          />
        )}
        <Styled.Page>
          <PageDisplay
            guides={guides}
            experience={experience}
            experiences={experiences}
            page={page}
            reactions={reactions}
            sliderValue={sliderValue}
            handleSliderChange={handleSliderChange}
            handleSelectExperience={handleSelectExperience}
            handleSelectReactions={handleSelectReactions}
          />
        </Styled.Page>
        <Styled.Navigation>
          {page === 0 && <NavButton disabled>login</NavButton>}
          {page === 0 && (
            <NavButton
              handleClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              anonymous
            </NavButton>
          )}
          {page === 1 && (
            <motion.div variants={button} initial="hidden" animate="show">
              <NavButton
                handleClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                next
              </NavButton>
            </motion.div>
          )}
          {page > 2 && page <= 4 && (
            <NavButton handleClick={() => setPage((currPage) => currPage - 1)}>
              prev
            </NavButton>
          )}
          {page >= 2 && page <= 3 && (
            <NavButton
              disabled={experience.length === 0}
              handleClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              next
            </NavButton>
          )}
          {page === 4 && (
            <NavButton
              disabled={reactions.length === 0}
              handleClick={handleSave}
            >
              save
            </NavButton>
          )}
        </Styled.Navigation>
      </Styled.Container>
    </>
  );
}
