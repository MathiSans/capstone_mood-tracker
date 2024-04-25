import { useSession } from "next-auth/react";
import experienceAnalyser from "@/utils/experienceAnalyser";
import lastWeekAnalyser from "@/utils/lastWeekAnalyser";
import { useData } from "@/lib/useData";
import * as Styled from "./BarChartTile.styled";

export default function BarChartTile({
  handleFilterSwitchClick,
  singleExperienceList,
  isLast7Days,
  setIsLast7Days,
  handleExperienceClick,
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
      ? topTwoExperiences[1]?.experience
      : "NO DATA";

  return (
    <Styled.Container>
      <Styled.HeadContainer>
        <Styled.Switch
          onClick={() => {
            handleFilterSwitchClick();
          }}
        >
          <Styled.Option $isActive={!isLastWeek}>all time</Styled.Option>
          <Styled.Option $isActive={isLastWeek}>last 7 days</Styled.Option>
        </Styled.Switch>
        <Styled.EntriesDescriptionContainer>
          <Styled.EntriesDescription $bold>
            {singleExperienceList ? singleEmotionDisplayed.length : totalCount}{" "}
            entries
          </Styled.EntriesDescription>
          <Styled.EntriesDescription>
            {singleExperienceList ? "" : "most are"}{" "}
            {singleExperienceList
              ? singleEmotionDisplayed[0]?.experience
              : emotionFirst}{" "}
            {singleExperienceList ? "" : `and ${emotionSecond}`}
          </Styled.EntriesDescription>
        </Styled.EntriesDescriptionContainer>
      </Styled.HeadContainer>
      <Styled.BarChartContainer>
        {visualizedData.experiences &&
          visualizedData.experiences.map(
            ({ index, count, color, experience }) => (
              <Styled.SingleBar
                key={index}
                color={color}
                barHeight={Math.floor((count / totalCount) * 100)}
                onClick={() => {
                  handleExperienceClick(experience);
                  console.log("clicked", experience);
                }}
                isClicked={clickedExperience === experience}
              />
            )
          )}
      </Styled.BarChartContainer>
    </Styled.Container>
  );
}
