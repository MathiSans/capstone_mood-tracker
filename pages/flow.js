import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { experiences } from "@/experiences";
import useLocalStorageState from "use-local-storage-state";
import Animation from "@/components/3DAnimation/3DAnimation";
import Page from "@/components/Page/Page";
import FlowContainer from "@/components/FlowContainer/FlowContainer";
import Navigation from "@/components/Navigation/Navigation";
import NavButton from "@/components/NavButton/NavButton";
import PageDisplay from "@/components/PageDisplay/PageDisplay";

export default function TestFlow() {
  const router = useRouter();

  // local storage state to save everything at the end
  const [allEntries, setAllEntries] = useLocalStorageState("anonymous_moods", {
    defaultValue: [],
  });

  // state to hold the selection of the first tag cloud
  const [experience, setExperience] = useState([]);

  // state of the slider value
  const [sliderValue, setSliderValue] = useState(0.5);

  // state to hold the selection of the second tag cloud
  const [reactions, setReactions] = useState([]);

  // state that holds the color that is selected in the first tag cloud
  const [color, setColor] = useState("grey");

  // state that hold the current page
  const [page, setPage] = useState(0);

  const [speed, setSpeed] = useState(0);

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
      <Animation
        color={color}
        opacity={sliderValue}
        blur={3}
        speed={sliderValue}
      />
      <FlowContainer>
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
