import * as Styled from "./EntriesList.styled";
import { useSWRConfig } from "swr";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Circle from "../Circle/Circle";
import experienceAnalyser from "@/utils/experienceAnalyser";
import SwissKnifeList from "./SwissKnifeList";
import styled from "styled-components";
import NavButton from "../NavButton/NavButton";
import { useSession } from "next-auth/react";

//! Refactor and rename EntriesList,js and add it to Entries Page (entries.js)
//! Are all states needed?
export default function EntriesList({
  isLastWeek,
  handleEntryFilter,
  filtered,
  filter,
  isVisualized,
  handleIsVisualized,
}) {
  const [deletingId, setDeletingId] = useState(null);
  const { mutate } = useSWRConfig();
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const [targetExperience, setTargetExperience] = useState(null);
  const [isExperiencePage, setIsExperiencePage] = useState(false);
  const { data: session } = useSession();

  //! --> utils
  function filterEntriesByUser() {
    if (!session) {
      return filtered;
    }

    return filtered.filter((entry) => entry.user === session.user.id);
  }

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

  const result = experienceAnalyser(filterEntriesByUser());
  const totalCount = result.totalCount;

  const experiences = isExperiencePage
    ? filterEntriesByUser()
    : result.experiences;
  const sortedExperiences = experiences.sort((a, b) => b.count - a.count);

  const singleEmotionEntryList = experiences.filter(
    (experience) => experience.experience === targetExperience
  );
  const handleExperienceClick = (experience) => {
    setTargetExperience(experience);
    setIsExperiencePage(!isExperiencePage);
  };

  const outputData = filterEntriesByUser();

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  return (
    <>
      {/*Checkbox wird auf der Liste von der Einzelnen Emotion ausgeblendet*/}
      {!isExperiencePage && (
        <SwitchContainer>
          {" "}
          <Switch $right={isLastWeek} onClick={() => handleEntryFilter()}>
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
              <SwitchText>{isLastWeek ? "last week" : "all"}</SwitchText>
            </motion.div>
          </Switch>
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
        </SwitchContainer>
      )}

      {/*Der Block geht sehr lang und rendert Entweder die ShowAll Liste oder Die Circle*/}
      {isVisualized ? (
        <>
          {/* <p>
            This are your{isExperiencePage && ` ${targetExperience}`} moods
            {filter === "lastWeek" && " of the last week"}
          </p> */}

          {/*Nur der Button wird eingeblendet auf der Liste der einzelen Emotion*/}
          {isExperiencePage ? (
            <NavButton
              handleClick={() => {
                setIsExperiencePage(!isExperiencePage);
              }}
            >
              reset experience filter
            </NavButton>
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

const SwitchContainer = styled.div`
  display: flex;
  gap: var(--spacing-m);
`;
