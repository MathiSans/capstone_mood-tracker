import { Grid } from "../Dashboard.styled";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";
import EntriesList from "./EntriesList/EntriesList";

export default function EntriesColumn({
  isLast7Days,
  setIsLast7Days,
  handleExperienceClick,
  targetExperience,
  setTargetExperience,
  singleExperienceList,
  clickedExperience,
  singleEmotionDisplayed,
  isLoadingEntries,
  errorEntries,
  allEmotionsDisplayed,
  handleFilterSwitchClick,
  visualizedData,
}) {
  return (
    <Grid>
      {!isLoadingEntries && (
        <BarChartTile
          handleFilterSwitchClick={handleFilterSwitchClick}
          singleExperienceList={singleExperienceList}
          setIsLast7Days={setIsLast7Days}
          isLast7Days={isLast7Days}
          handleExperienceClick={handleExperienceClick}
          clickedExperience={clickedExperience}
          singleEmotionDisplayed={singleEmotionDisplayed}
          isLoadingEntries={isLoadingEntries}
          errorEntries={errorEntries}
          visualizedData={visualizedData}
        />
      )}

      <EntriesList
        data={
          singleExperienceList ? singleEmotionDisplayed : allEmotionsDisplayed
        }
        targetExperience={targetExperience}
        setTargetExperience={setTargetExperience}
      />
    </Grid>
  );
}
