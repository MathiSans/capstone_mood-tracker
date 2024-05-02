import { Grid } from "../Dashboard.styled";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import LastEntryTile from "../Tiles/LastEntryTile/LastEntryTile";
import NewEntryTile from "../Tiles/NewEntryTile/NewEntryTile";
import { useData } from "@/lib/useData";
import { useSession } from "next-auth/react";

export default function OverviewColumn() {
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
