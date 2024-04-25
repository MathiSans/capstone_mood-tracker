import { Grid } from "../Dashboard.styled";
import InboxTile from "../Tiles/InboxTile/InboxTile";
import OutboxTile from "../Tiles/OutboxTile/OutboxTile";

export default function CommunityColumn() {
  return (
    <Grid>
      <InboxTile />
      <OutboxTile />
    </Grid>
  );
}
