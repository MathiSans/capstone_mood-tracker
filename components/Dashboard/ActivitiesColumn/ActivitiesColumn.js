import ActivitiesList from "./ActivitiesList/ActivitiesList.js";
import { Grid } from "../Dashboard.styled";

export default function ActivitiesColumn() {
  return (
    <Grid>
      <ActivitiesList />
    </Grid>
  );
}
