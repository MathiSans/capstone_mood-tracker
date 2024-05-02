import { Grid } from "../Dashboard.styled";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import NewEntryTile from "./NewEntryTile/NewEntryTile";
import { useData } from "@/lib/useData";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";

export default function OverviewColumn({
  isLast7Days,
  handleExperienceClick,
  singleExperienceList,
  clickedExperience,
  singleEmotionDisplayed,
  errorEntries,
  isLoadingEntries,
  handleFilterSwitchClick,
  visualizedData,
}) {
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
      <ActivityTile isOnOverviewColumn />
    </Grid>
  );
}
