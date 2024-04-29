import { Grid } from "../Dashboard.styled";
import Link from "next/link";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";

export default function OverviewColumn({
  isLast7Days,
  handleExperienceClick,
  singleExperienceList,
  clickedExperience,
  singleEmotionDisplayed,

  isLoadingEntries,
  handleFilterSwitchClick,
  visualizedData,
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
    </Grid>
  );
}
