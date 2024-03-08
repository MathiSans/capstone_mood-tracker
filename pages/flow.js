import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { experiences } from "@/experiences";
import useLocalStorageState from "use-local-storage-state";
import Animation from "@/components/Animation/Animation";
import Page from "@/components/Page/Page";
import FlowContainer from "@/components/FlowContainer/FlowContainer";
import Navigation from "@/components/Navigation/Navigation";
import NavButton from "@/components/NavButton/NavButton";
import PageDisplay from "@/components/PageDisplay/PageDisplay";
import PlayButton from "@/components/PlaySound/PlayButton";
import PlaySound from "@/components/PlaySound/PlaySound";
import memory from "@/public/sounds/memory.mp3";

export default function TestFlow() {
  const router = useRouter();
  const [allEntries, setAllEntries] = useLocalStorageState("anonymous_moods", {
    defaultValue: [],
  });
  const [experience, setExperience] = useState([]);
  const [sliderValue, setSliderValue] = useState(0.5);
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

  function handleSave() {
    setAllEntries([
      ...allEntries,
      {
        id: nanoid(),
        experience: experience,
        reactions: reactions,
        slider: sliderValue,
        date: new Date().toLocaleString(),
      },
    ]);
    router.push("entries");
  }

  return (
    <>
      <Animation color={color} opacity={sliderValue} />
      <FlowContainer>
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
        <Page>
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
        </Page>
        <Navigation>
          {page === 0 && <NavButton disabled>login</NavButton>}
          {page <= 1 && (
            <NavButton
              handleClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              {page === 0 ? "anonymous" : "next"}
            </NavButton>
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
        </Navigation>
      </FlowContainer>
    </>
  );
}
