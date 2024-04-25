import { Grid } from "../Dashboard.styled";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";
import EntriesList from "./EntriesList/EntriesList";

export default function EntriesColumn({
  isLast7Days,
  setIsLast7Days,
  isOnEntriesPage,
  handleExperienceClick,
  targetExperience,
  setTargetExperience,
  setSingleExperienceList,
  singleExperienceList,
  clickedExperience,
  singleEmotionDisplayed,
  isLoadingEntries,
  errorEntries,
  allEmotionsDisplayed,
  userEntries,
  allEntries,
  last7DaysAnalyser,
  last7DaysEntries,
}) {
  return (
    <Grid>
      {!isLoadingEntries && (
        <BarChartTile
          setIsLast7Days={setIsLast7Days}
          isLast7Days={isLast7Days}
          targetExperience={targetExperience}
          setTargetExperience={setTargetExperience}
          handleExperienceClick={handleExperienceClick}
          singleExperienceList={singleExperienceList}
          clickedExperience={clickedExperience}
          setSingleExperienceList={setSingleExperienceList}
          singleEmotionDisplayed={singleEmotionDisplayed}
          userEntries={userEntries}
          allEntries={allEntries}
          last7DaysAnalyser={last7DaysAnalyser}
          last7DaysEntries={last7DaysEntries}
          isOnEntriesPage={isOnEntriesPage}
          isLoadingEntries={isLoadingEntries}
          errorEntries={errorEntries}
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
