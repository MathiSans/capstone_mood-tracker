import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import Guide from "@/components/Guide/Guide";
import GuideAnimator from "@/components/GuideAnimator/GuideAnimator";
import TestSlider from "@/components/TestSlider/TestSlider";
import Animation from "@/components/Animation/Animation";
import TestTagCloud from "@/components/TestTagCloud/TestTagCloud";
import useLocalStorageState from "use-local-storage-state";
import TestPage from "@/components/TestPage/TestPage";
import TestFlowContainer from "@/components/TestFlowContainer/TestFlowContainer";
import { experiences } from "@/experiences";

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
      <Animation color={color} opacity={sliderValue} />
      <TestFlowContainer>
        <>{PageDisplay()}</>
        <div style={{ display: "flex", gap: "20px" }}>
          {page > 2 && page <= 4 && (
            <button
              style={{
                padding: "10px 26px",
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
                cursor: "pointer",
              }}
              onClick={() => setPage((currPage) => currPage - 1)}
            >
              prev
            </button>
          )}
          {page === 0 && (
            <button
              disabled
              style={{
                padding: "10px 26px",
                color: "grey",
                backgroundColor: "transparent",
                border: "1px solid grey",
                cursor: "not-allowed",
              }}
            >
              login
            </button>
          )}
          {page <= 1 && (
            <button
              style={{
                padding: "10px 26px",
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
                cursor: "pointer",
              }}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              {page === 0 ? "anonymous" : "next"}
            </button>
          )}
          {page >= 2 && page <= 3 && (
            <button
              disabled={experience.length === 0}
              style={{
                padding: "10px 26px",
                backgroundColor: "transparent",
                cursor: experience.length === 0 ? "not-allowed" : "pointer",
                border:
                  experience.length === 0
                    ? "1px solid grey"
                    : "1px solid white",
                color: experience.length === 0 ? "grey" : "white",
              }}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              {page === 0 ? "anonymous" : "next"}
            </button>
          )}
          {page === 4 && (
            <button
              disabled={reactions.length === 0}
              style={{
                padding: "10px 26px",
                backgroundColor: "transparent",
                cursor: reactions.length === 0 ? "not-allowed" : "pointer",
                border:
                  reactions.length === 0 ? "1px solid grey" : "1px solid white",
                color: reactions.length === 0 ? "grey" : "white",
              }}
              onClick={() => {
                handleSave();
              }}
            >
              save
            </button>
          )}
        </div>
      </TestFlowContainer>
    </>
  );
}
