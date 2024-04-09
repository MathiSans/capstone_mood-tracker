import Intensity from "@/utils/intensity";

import * as Styled from "./EntriesList.styled";
import { useSWRConfig } from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Circle from "../Circle/Circle";
import { Grid } from "./EntriesList.styled";
import experienceAnalyser from "@/utils/experienceAnalyser";
import MapOfCircles from "../MapOfCircles/MapOfCircles";
import SwissKnifeList from "./SwissKnifeList";
import styled from "styled-components";

export default function EntriesList({
  filtered,
  filter,
  isVisualized,
  handleIsVisualized,
}) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState(null);
  const [mapsToggle, setMapsToggle] = useState(true);

  const { mutate } = useSWRConfig();
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const [targetExperience, setTargetExperience] = useState(null);
  const [isExperiencePage, setIsExperiencePage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current
        ? containerRef.current.offsetWidth
        : window.innerWidth;
      const containerHeight = containerRef.current
        ? containerRef.current.offsetHeight
        : window.innerHeight;
      setScreenSize({ width: containerWidth, height: containerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleDeleteDialog(event, id) {
    event.stopPropagation();
    setDeletingId(id);
  }

  async function handleDeleteEntry(event, id) {
    event.stopPropagation();
    await fetch(`/api/entries/${id}`, {
      method: "DELETE",
    });
    mutate("/api/entries");
  }

  const result = experienceAnalyser(filtered);
  const totalCount = result.totalCount;

  const experiences = isExperiencePage ? filtered : result.experiences;
  const sortedExperiences = experiences.sort((a, b) => b.count - a.count);

  const singleEmotionEntryList = experiences.filter(
    (experience) => experience.experience === targetExperience
  );
  const handleExperienceClick = (experience) => {
    setTargetExperience(experience);
    setIsExperiencePage(!isExperiencePage);
  };

  console.log("isExperiencePage", isExperiencePage);
  const outputData = filtered;

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };
  return (
    <>
      {/*Checkbox wird auf der Liste von der Einzelnen Emotion ausgeblendet*/}
      {!isExperiencePage && (
        <Switch $right={isVisualized} onClick={() => handleIsVisualized()}>
          <motion.div // styled-components police, be aware: motion.divs are kind of incompatible with styled-components and must be styled like this 🤓
            style={{
              width: "80px",
              height: "32px",
              backgroundColor: `var(--color-main-alt)`,
              borderRadius: `var(--border-radius-medium)`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: `var(--color-main)`,
            }}
            layout
            transition={spring}
          >
            <SwitchText>{isVisualized ? "Circles" : "List View"}</SwitchText>
          </motion.div>
        </Switch>

        // <CheckboxLabel htmlFor="visualize">
        //   {isVisualized ? "Listview" : "Visualize"}
        //   <CheckboxInput
        //     id="visualize"
        //     type="checkbox"
        //     checked={isVisualized}
        //     onChange={handleIsVisualized}
        //   />
        // </CheckboxLabel>
      )}

      {/*Der Block geht sehr lang und rendert Entweder die ShowAll Liste oder Die Circle*/}
      {isVisualized ? (
        <>
          <p>
            This are your{isExperiencePage && ` ${targetExperience}`} moods
            {filter === "lastWeek" && " of the last week"}
          </p>

          {/*Nur der Button wird eingeblendet auf der Liste der einzelen Emotion*/}
          {isExperiencePage ? (
            <button
              onClick={() => {
                setIsExperiencePage(!isExperiencePage);
              }}
            >
              back
            </button>
          ) : (
            ""
          )}
          <div>
            {!isExperiencePage ? (
              <Styled.Grid>
                {sortedExperiences.map((entry, index) => (
                  <Circle
                    key={index}
                    count={entry.count}
                    percentage={Math.floor((entry.count / totalCount) * 100)}
                    circleSize={Math.max(
                      Math.sqrt(entry.count) *
                        Math.min(screenSize.width, screenSize.height) *
                        (0.2 / Math.log(entry.count + 3)),
                      10
                    )}
                    name={entry.experience || entry.region}
                    color={entry.color}
                    handleExperienceClick={
                      handleExperienceClick
                        ? () => handleExperienceClick(entry.experience)
                        : null
                    }
                  />
                ))}
                {/* <MapOfCircles
                  data={sortedExperiences}
                  handleExperienceClick={handleExperienceClick}
                  totalCount={totalCount}
                  isEntriesListStyle={true}
                /> */}
              </Styled.Grid>
            ) : (
              <SwissKnifeList
                outputData={singleEmotionEntryList}
                filter={filter}
                deletingId={deletingId}
                handleDeleteDialog={handleDeleteDialog}
                handleDeleteEntry={handleDeleteEntry}
              />
            )}
          </div>
        </>
      ) : (
        <SwissKnifeList
          outputData={outputData}
          filter={filter}
          deletingId={deletingId}
          handleDeleteDialog={handleDeleteDialog}
          handleDeleteEntry={handleDeleteEntry}
        />
      )}
    </>
  );
}

export const CheckboxLabel = styled.label`
  height: 40px;
  padding: 10px;
  text-align: center;
  width: 110px;
  border-radius: var(--border-radius-medium);
  font-size: var(--font-size-default);
  background-color: ${(props) =>
    props.$color ? props.$color : `var(--color-neutral)`};
`;

export const CheckboxInput = styled.input`
  appearance: none;
  position: relative;
  -webkit-appearance: none;
  height: 40px;
  width: 110px;
  outline: none;
  font-size: var(--font-size-default);
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  top: -32px;
  left: -14px;

  &:checked::after {
    content: "";
    position: absolute;
    height: 40px;
    width: 110px;
    border: 3.5px solid var(--color-main-alt);
    font-size: var(--font-size-default);
    color: var(--color-main-alt);
    border-radius: var(--border-radius-medium);
  }
`;

const SwitchText = styled.p`
  font-size: 0.8rem;
`;
const Switch = styled.div`
  width: 160px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: ${(props) => (props.$right ? "flex-end" : "flex-start")};
  border-radius: var(--border-radius-large);
  padding: var(--spacing-s);
  cursor: pointer;
  z-index: 999;
`;
