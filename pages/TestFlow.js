import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { experiences } from "@/experiences";
import useLocalStorageState from "use-local-storage-state";
import Guide from "@/components/Guide/Guide";
import GuideAnimator from "@/components/GuideAnimator/GuideAnimator";
import Slider from "@/components/Slider/Slider";
import Animation from "@/components/Animation/Animation";
import TagCloud from "@/components/TagCloud/TagCloud";
import Page from "@/components/Page/Page";
import FlowContainer from "@/components/FlowContainer/FlowContainer";
import Navigation from "@/components/Navigation/Navigation";
import NavButton from "@/components/NavButton/NavButton";

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

  const guides = [
    "share your emotions ...",
    "breathe",
    "think about your day",
    "how do you feel?",
    "what do you feel right now?",
    "how intense is this feeling for you?",
    "what's your reaction?",
  ];

  function PageDisplay() {
    switch (page) {
      case 0:
        return (
          <Page>
            <Guide bigger={true} text={"komm zur Ruh"} />
          </Page>
        );
      case 1:
        return (
          <Page>
            <GuideAnimator guides={guides} />
          </Page>
        );
      case 2:
        return (
          <Page>
            <Guide text={guides[4]} />
            <TagCloud
              tags={experiences}
              colorSelected={true}
              allowMultiple={false}
              onSelectTag={handleSelectExperience}
              selectedTags={experience}
            />
          </Page>
        );
      case 3:
        return (
          <Page>
            <Guide text={guides[5]} />
            <Slider
              experience={experience}
              sliderValue={sliderValue}
              handleSliderChange={handleSliderChange}
            />
          </Page>
        );
      case 4:
        return (
          <Page>
            <Guide text={guides[6]} />
            <TagCloud
              selectedTags={reactions}
              tags={experience[0].reactions}
              colorSelected={true}
              allowMultiple={true}
              onSelectTag={handleSelectReactions}
            />
          </Page>
        );
    }
  }

  // function handleColorChange(color) {
  //   setColor(color);
  // }
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
    // router.push("entries");
    // window.location.reload();
  }

  return (
    <>
      <Animation color={color} opacity={sliderValue} />
      <FlowContainer>
        <>{PageDisplay()}</>
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
              handleClick={() => {
                handleSave();
              }}
            >
              save
            </NavButton>
          )}
        </Navigation>
      </FlowContainer>
    </>
  );
}
