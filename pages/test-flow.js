import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { experiences } from "@/experiences";
import useLocalStorageState from "use-local-storage-state";
import Guide from "@/components/Guide/Guide";
import GuideAnimator from "@/components/GuideAnimator/GuideAnimator";
import TestSlider from "@/components/TestSlider/TestSlider";
import Animation from "@/components/Animation/Animation";
import TestTagCloud from "@/components/TestTagCloud/TestTagCloud";
import TestPage from "@/components/TestPage/TestPage";
import TestFlowContainer from "@/components/TestFlowContainer/TestFlowContainer";
import Navigation from "@/components/Navigation/Navigation";
import TestNavButton from "@/components/TestNavButton/TestNavButton";

export default function TestFlow() {
  const router = useRouter();

  // local storage state to save everything at the end
  const [allEntries, setAllEntries] = useLocalStorageState("anonymous_moods", {
    defaultValue: [],
  });

  // state to hold the selection of the first tag cloud
  const [experience, setExperience] = useState([]);

  // state of the slider value
  const [sliderValue, setSliderValue] = useState(0.3);

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
          <TestPage>
            <Guide bigger={true} text={"komm zur Ruh"} />
          </TestPage>
        );
      case 1:
        return (
          <TestPage>
            <GuideAnimator guides={guides} />
          </TestPage>
        );
      case 2:
        return (
          <TestPage>
            <Guide text={guides[4]} />
            <TestTagCloud
              tags={experiences}
              colorSelected={true}
              allowMultiple={false}
              onSelectTag={handleSelectExperience}
              selectedTags={experience}
            />
          </TestPage>
        );
      case 3:
        return (
          <TestPage>
            <Guide text={guides[5]} />
            <TestSlider
              experience={experience}
              sliderValue={sliderValue}
              handleSliderChange={handleSliderChange}
            />
          </TestPage>
        );
      case 4:
        return (
          <TestPage>
            <Guide text={guides[6]} />
            <TestTagCloud
              selectedTags={reactions}
              tags={experience[0].reactions}
              colorSelected={true}
              allowMultiple={true}
              onSelectTag={handleSelectReactions}
            />
          </TestPage>
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
      {/* <Animation color={color} opacity={sliderValue} /> */}
      <TestFlowContainer>
        <>{PageDisplay()}</>
        <Navigation>
          {page === 0 && <TestNavButton disabled>login</TestNavButton>}
          {page <= 1 && (
            <TestNavButton
              handleClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              {page === 0 ? "anonymous" : "next"}
            </TestNavButton>
          )}
          {page > 2 && page <= 4 && (
            <TestNavButton
              handleClick={() => setPage((currPage) => currPage - 1)}
            >
              prev
            </TestNavButton>
          )}
          {page >= 2 && page <= 3 && (
            <TestNavButton
              disabled={experience.length === 0}
              handleClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              next
            </TestNavButton>
          )}
          {page === 4 && (
            <TestNavButton
              disabled={reactions.length === 0}
              handleClick={() => {
                handleSave();
              }}
            >
              save
            </TestNavButton>
          )}
        </Navigation>
      </TestFlowContainer>
    </>
  );
}
