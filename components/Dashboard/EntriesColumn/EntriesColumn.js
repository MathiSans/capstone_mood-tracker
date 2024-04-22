import { Grid } from "../Dashboard.styled";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";
import { useState } from "react";

export default function EntriesColumn() {
  const [isLastWeek, setIsLastWeek] = useState(true);

  return (
    <Grid>
      <BarChartTile setIsLastWeek={setIsLastWeek} isLastWeek={isLastWeek} />
    </Grid>
  );
}
