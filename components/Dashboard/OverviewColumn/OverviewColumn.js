import { Grid } from "../Dashboard.styled";
import ActivityTile from "../Tiles/ActivityTile/ActivityTile";
import NewEntryTile from "../Tiles/NewEntryTile/NewEntryTile";

export default function OverviewColumn() {
  return (
    <Grid>
      <NewEntryTile />
      <ActivityTile isOnOverviewColumn />
    </Grid>
  );
}
