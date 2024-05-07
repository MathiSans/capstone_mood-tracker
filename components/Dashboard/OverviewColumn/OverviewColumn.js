import { Grid } from "../Dashboard.styled";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import LastEntryTile from "../Tiles/LastEntryTile/LastEntryTile";
import NewEntryTile from "../Tiles/NewEntryTile/NewEntryTile";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";
import MessagesOverviewTile from "../Tiles/MessagesOverviewTile/MessagesOverviewTile";

export default function OverviewColumn({
  isLast7Days,
  handleExperienceClick,
  singleExperienceList,
  clickedExperience,
  singleEmotionDisplayed,
  entries,
  errorEntries,
  isLoadingEntries,
  handleFilterSwitchClick,
  visualizedData,
}) {
  const lastEntry = !isLoadingEntries && entries[entries.length - 1];

  return (
    <Grid>
      {!isLoadingEntries && (
        <BarChartTile
          handleFilterSwitchClick={handleFilterSwitchClick}
          singleExperienceList={singleExperienceList}
          isLast7Days={isLast7Days}
          handleExperienceClick={handleExperienceClick}
          clickedExperience={clickedExperience}
          singleEmotionDisplayed={singleEmotionDisplayed}
          isLoadingEntries={isLoadingEntries}
          errorEntries={errorEntries}
          visualizedData={visualizedData}
        />
      )}
      <NewEntryTile />
      {lastEntry && !isLoadingEntries && (
        <LastEntryTile
          experience={lastEntry.experience}
          time={lastEntry.time}
          color={lastEntry.color}
          intensity={lastEntry.intensity}
          reactions={lastEntry.reactions}
          entryUrl={lastEntry._id}
          location={lastEntry.location}
          isOnOverviewColumn
        />
      )}
      <MessagesOverviewTile />
      <ActivityTile isOnOverviewColumn />
    </Grid>
  );
}
