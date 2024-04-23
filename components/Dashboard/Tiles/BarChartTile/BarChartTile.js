import { useSession } from "next-auth/react";
import experienceAnalyser from "@/utils/experienceAnalyser";
import lastWeekAnalyser from "@/utils/lastWeekAnalyser";
import { useData } from "@/lib/useData";
import {
  BarChartContainer,
  LastWeekTogglePill,
  EntriesDescription,
  SingleBar,
  HeadContainer,
} from "./BarChartTile.styled";

export default function BarChartTile({
  isLastWeek,
  setIsLastWeek,
  handleExperienceClick,
  singleExperienceList,
  setSingleExperienceList,
  clickedExperience,
  singleEmotionDisplayed,
}) {
  const { data: session } = useSession();

  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  console.log(allEntries, isLoadingEntries, errorEntries);
  const { userEntries } = useData().fetchedUserEntries;
  const lastWeek = lastWeekAnalyser(session ? userEntries : allEntries);
  console.log("lastWeek", lastWeek);
  console.log("userEntries", userEntries);

  const visualizedData = isLastWeek
    ? experienceAnalyser(lastWeek)
    : experienceAnalyser(session ? userEntries : allEntries);

  const totalCount = visualizedData.totalCount;
  console.log("visualizedData.experiences", visualizedData.experiences);

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

  console.log("singleEmotionDisplayed", singleEmotionDisplayed);
  return (
    <BarChartContainer>
      <HeadContainer>
        <div>
          <LastWeekTogglePill
            onClick={() => {
              setIsLastWeek(!isLastWeek);
            }}
          >
            <span>Last Week</span>
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
