import { Grid } from "../Dashboard.styled";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import LastEntryTile from "../Tiles/LastEntryTile/LastEntryTile";
import NewEntryTile from "../Tiles/NewEntryTile/NewEntryTile";
import { useData } from "@/lib/useData";
import { useSession } from "next-auth/react";
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
    })
    const { data: session } = useSession();
    const { allEntries, isLoadingEntries, errorEntries } =
      useData().fetchedAllEntries;
    const { userEntries } = useData().fetchedUserEntries;
  
    const lastEntry =
      !isLoadingEntries &&
      (session ? userEntries : allEntries) &&
      (session
        ? userEntries[userEntries.length - 1]
        : allEntries[allEntries.length - 1]);
        
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
      {!isLoadingEntries && (
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
      <ActivityTile isOnOverviewColumn />
    </Grid>
  );
}
