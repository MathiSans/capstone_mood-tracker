import { useSession } from "next-auth/react";
import experienceAnalyser from "@/utils/experienceAnalyser";

import {
  BarChartContainer,
  LastWeekTogglePill,
  EntriesDescription,
  SingleBar,
  HeadContainer,
} from "./BarChartTile.styled";

export default function BarChartTile({
  isLast7Days,
  setIsLast7Days,
  handleExperienceClick,
  singleExperienceList,
  setSingleExperienceList,
  clickedExperience,
  singleEmotionDisplayed,
  allEntries,
  userEntries,
  isLoadingEntries,
  errorEntries,
  last7DaysEntries,
}) {
  const { data: session } = useSession();

  const visualizedData = isLast7Days
    ? experienceAnalyser(last7DaysEntries)
    : experienceAnalyser(session ? userEntries : allEntries);

  const totalCount = visualizedData.totalCount;

  if (isLoadingEntries) return <p>Entries Loading</p>;
  if (errorEntries) return <p>Sorry, there was an error fetching entries</p>;

  function topTwoExperiencesAnalyser(data) {
    data.sort((a, b) => b.count - a.count);
    const topTwoExperiences = data.slice(0, 2);
    return topTwoExperiences;
  }

  const topTwoExperiences = topTwoExperiencesAnalyser(
    visualizedData.experiences
  );

  const emotionFirst =
    topTwoExperiences.length !== 0
      ? topTwoExperiences[0].experience
      : "NO DATA";
  const emotionSecond =
    topTwoExperiences.length !== 0
      ? topTwoExperiences[1].experience
      : "NO DATA";

  return (
    <BarChartContainer>
      <HeadContainer>
        <div>
          <LastWeekTogglePill
            onClick={() => {
              setIsLast7Days(!isLast7Days);
            }}
          >
            <span>{isLast7Days ? "Last 7 days" : "all Entries"}</span>
          </LastWeekTogglePill>
        </div>
        <EntriesDescription>
          {singleExperienceList ? singleEmotionDisplayed.length : totalCount}{" "}
          entries most are{" "}
          {singleExperienceList
            ? singleEmotionDisplayed[0].experience
            : emotionFirst}{" "}
          {singleExperienceList ? "" : `and ${emotionSecond}`}
        </EntriesDescription>
      </HeadContainer>

      {visualizedData.experiences &&
        visualizedData.experiences.map(
          ({ index, count, color, experience }) => (
            <>
              <SingleBar
                key={index}
                color={color}
                barHeight={Math.floor((count / totalCount) * 100)}
                onClick={() => {
                  handleExperienceClick(experience);
                }}
                isClicked={clickedExperience === experience}
              />
            </>
          )
        )}
    </BarChartContainer>
  );
}
