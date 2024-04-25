import { Grid } from "../Dashboard.styled";
import Link from "next/link";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import NewEntryTile from "./NewEntryTile/NewEntryTile";
import { useData } from "@/lib/useData";

export default function OverviewColumn({
  isLast7Days,
  setIsLast7Days,
  targetExperience,
  setTargetExperience,
  handleExperienceClick,
  singleExperienceList,
  clickedExperience,
  setSingleExperienceList,
  singleEmotionDisplayed,
  last7DaysAnalyser,
  last7DaysEntries,
  userEntries,
  allEntries,
  isLoadingEntries,
  handleFilterSwitchClick,
}) {
  const boxes = [
    { gridColumnEnd: "span 4", gridRowEnd: "span 3" },
    { gridColumnEnd: "span 4", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
  ];

export default function OverviewColumn() {
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
          isOnEntriesPage={true}
          last7DaysAnalyser={last7DaysAnalyser}
          last7DaysEntries={last7DaysEntries}
          handleFilterSwitchClick={handleFilterSwitchClick}
        />
      )}
      {boxes.map((box, index) => (
        <Link
          href="/newentry"
          key={index}
          style={{
            background: "var(--color-neutral)",
            borderRadius: "var(--border-radius-small)",
            height: "100%",
            width: "100%",
            gridColumnEnd: box.gridColumnEnd,
            gridRowEnd: box.gridRowEnd,
          }}
        />
      ))}
      <NewEntryTile />
      <ActivityTile isOnOverviewColumn />
    </Grid>
  );
}
