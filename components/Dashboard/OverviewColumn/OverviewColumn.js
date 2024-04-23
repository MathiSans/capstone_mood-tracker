import { Grid } from "../Dashboard.styled";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import NewEntryTile from "./NewEntryTile/NewEntryTile";
import { useData } from "@/lib/useData";

export default function OverviewColumn() {
  return (
    <Grid>
      <NewEntryTile />
      <ActivityTile isOnOverviewColumn />
    </Grid>
  );
}
