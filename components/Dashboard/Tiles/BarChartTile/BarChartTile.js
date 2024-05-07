import * as Styled from "./BarChartTile.styled";

export default function BarChartTile({
  handleFilterSwitchClick,
  singleExperienceList,
  isLast7Days,
  handleExperienceClick,
  clickedExperience,
  singleEmotionDisplayed,
  isLoadingEntries,
  errorEntries,
  visualizedData,
}) {
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
          <Styled.Option $isActive={!isLast7Days}>
            <Styled.TileH4>All time</Styled.TileH4>
          </Styled.Option>
          <Styled.Option $isActive={isLast7Days}>
            <Styled.TileH4>Last 7 days</Styled.TileH4>
          </Styled.Option>
        </Styled.Switch>
        <Styled.EntriesDescriptionContainer>
          <Styled.EntriesDescription $bold>
            {singleExperienceList ? singleEmotionDisplayed.length : totalCount}{" "}
            Entries{" "}
          </Styled.EntriesDescription>
          <Styled.EntriesDescription>
            {singleExperienceList ? "" : "Most felt experiences are"}{" "}
          </Styled.EntriesDescription>
          <Styled.EntriesDescription>
            {singleExperienceList
              ? singleEmotionDisplayed[0]?.experience
              : emotionFirst}{" "}
            {singleExperienceList ? "" : `and ${emotionSecond}`}
          </Styled.EntriesDescription>
        </Styled.EntriesDescriptionContainer>
      </Styled.HeadContainer>
      <Styled.BarChartContainer>
        {visualizedData &&
          visualizedData.experiences.map(
            ({ count, color, experience }, index) => (
              <Styled.SingleBar
                key={index}
                $color={color}
                $barHeight={Math.min(
                  Math.floor((count / totalCount) * 250),
                  100
                )}
                onClick={() => handleExperienceClick(experience)}
                $isClicked={
                  singleExperienceList && clickedExperience === experience
                }
              />
            )
          )}
      </Styled.BarChartContainer>
    </Styled.Container>
  );
}
