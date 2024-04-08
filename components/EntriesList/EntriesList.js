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

export default function EntriesList({ filtered, filter }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState(null);
  const { mutate } = useSWRConfig();
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const [targetExperience, setTargetExperience] = useState(null);
  const [isExperiencePage, setIsExperiencePage] = useState(true);

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

  const experiences = !isExperiencePage ? filtered : result.experiences;
  const sortedExperiences = experiences.sort((a, b) => b.count - a.count);

  const singleEmotionEntryList = experiences.filter(
    (experience) => experience.experience === targetExperience
  );
  const handleExperienceClick = (experience) => {
    setTargetExperience(experience);
    setIsExperiencePage(!isExperiencePage);
  };

  return (
    <>
      {filter == "moodsMap" ? (
        <>
          <p>This are your moods of the last week</p>
          {!isExperiencePage ? (
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
          <Grid>
            {isExperiencePage ? (
              sortedExperiences.map((entry, index) => (
                <Circle
                  key={entry._id}
                  count={entry.count}
                  percentage={Math.floor((entry.count / totalCount) * 100)}
                  circleSize={Math.max(
                    Math.sqrt(entry.count) *
                      Math.min(screenSize.width, screenSize.height) *
                      (0.2 / Math.log(entry.count + 3)),
                    10
                  )}
                  name={entry.experience}
                  color={entry.color}
                  handleExperienceClick={() =>
                    handleExperienceClick(entry.experience)
                  }
                />
              ))
            ) : (
              <AnimatePresence>
                {singleEmotionEntryList.map((entry) => (
                  <>
                    <motion.div
                      key={entry._id}
                      whileHover={{ scale: 1.05 }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Styled.Card onClick={() => router.push(`${entry._id}`)}>
                        <Styled.ColoredShapeContainer>
                          <Styled.ColoredShape color={entry.color} />
                        </Styled.ColoredShapeContainer>
                        <Styled.Sentence>
                          <Styled.StaticText>Somebody </Styled.StaticText>
                          {entry.location === "unknown"
                            ? ""
                            : `in ${entry.location.region}`}
                          <Styled.StaticText> felt</Styled.StaticText>{" "}
                          {entry.experience}.{" "}
                          <Styled.StaticText>
                            More specifically
                          </Styled.StaticText>{" "}
                          <Intensity
                            value={entry.intensity}
                            experience={entry.experience}
                          />
                          <Styled.StaticText>
                            . They selected these tags:
                          </Styled.StaticText>{" "}
                          {entry.reactions.map((reaction, index, array) => (
                            <span key={index}>
                              {reaction}
                              {index < array.length - 1 && ", "}
                            </span>
                          ))}
                        </Styled.Sentence>
                        <div>
                          {filter === "value 2" ? (
                            <Styled.Sentence>{entry.time}</Styled.Sentence>
                          ) : (
                            ""
                          )}
                        </div>

                        <Styled.DeleteContainer>
                          {deletingId === entry._id ? (
                            <>
                              <Styled.DeleteQuestion>
                                sure about deleting?
                              </Styled.DeleteQuestion>
                              <Styled.DeleteAnswer
                                red
                                onClick={(event) =>
                                  handleDeleteEntry(event, entry._id)
                                }
                              >
                                yes
                              </Styled.DeleteAnswer>
                              <Styled.DeleteAnswer
                                onClick={(event) =>
                                  handleDeleteDialog(event, null)
                                }
                              >
                                no
                              </Styled.DeleteAnswer>
                            </>
                          ) : (
                            <>
                              <Styled.DeleteButton
                                as="a"
                                onClick={(event) =>
                                  handleDeleteDialog(event, entry._id)
                                }
                              >
                                <FiTrash2 />
                              </Styled.DeleteButton>
                            </>
                          )}
                        </Styled.DeleteContainer>
                      </Styled.Card>
                    </motion.div>
                  </>
                ))}
              </AnimatePresence>
            )}
          </Grid>
        </>
      ) : (
        <>
          {filter === "lastWeek" && <p>This are your moods of the last week</p>}
          <Styled.Grid>
            <AnimatePresence>
              {filtered.map((entry) => (
                <motion.div
                  key={entry._id}
                  whileHover={{ scale: 1.05 }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Styled.Card onClick={() => router.push(`${entry._id}`)}>
                    <Styled.ColoredShapeContainer>
                      <Styled.ColoredShape color={entry.color} />
                    </Styled.ColoredShapeContainer>
                    <Styled.Sentence>
                      <Styled.StaticText>Somebody </Styled.StaticText>
                      {entry.location === "unknown"
                        ? ""
                        : `in ${entry.location.region}`}
                      <Styled.StaticText> felt</Styled.StaticText>{" "}
                      {entry.experience}.{" "}
                      <Styled.StaticText>More specifically</Styled.StaticText>{" "}
                      <Intensity
                        value={entry.intensity}
                        experience={entry.experience}
                      />
                      <Styled.StaticText>
                        . They selected these tags:
                      </Styled.StaticText>{" "}
                      {entry.reactions.map((reaction, index, array) => (
                        <span key={index}>
                          {reaction}
                          {index < array.length - 1 && ", "}
                        </span>
                      ))}
                    </Styled.Sentence>
                    <div>
                      {filter === "lastWeek" ? (
                        <Styled.Sentence>{entry.time}</Styled.Sentence>
                      ) : (
                        ""
                      )}
                    </div>

                    <Styled.DeleteContainer>
                      {deletingId === entry._id ? (
                        <>
                          <Styled.DeleteQuestion>
                            sure about deleting?
                          </Styled.DeleteQuestion>
                          <Styled.DeleteAnswer
                            red
                            onClick={(event) =>
                              handleDeleteEntry(event, entry._id)
                            }
                          >
                            yes
                          </Styled.DeleteAnswer>
                          <Styled.DeleteAnswer
                            onClick={(event) => handleDeleteDialog(event, null)}
                          >
                            no
                          </Styled.DeleteAnswer>
                        </>
                      ) : (
                        <>
                          <Styled.DeleteButton
                            as="a"
                            onClick={(event) =>
                              handleDeleteDialog(event, entry._id)
                            }
                          >
                            <FiTrash2 />
                          </Styled.DeleteButton>
                        </>
                      )}
                    </Styled.DeleteContainer>
                  </Styled.Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </Styled.Grid>
        </>
      )}
    </>
  );
}
