import { Grid } from "../Dashboard.styled";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import LastEntryTile from "../Tiles/LastEntryTile/LastEntryTile";
import NewEntryTile from "../Tiles/NewEntryTile/NewEntryTile";
import { useData } from "@/lib/useData";

export default function OverviewColumn() {
  return (
    <Grid>
      <NewEntryTile />
      <LastEntryTile />
      <ActivityTile isOnOverviewColumn />
    </Grid>
  );
}
