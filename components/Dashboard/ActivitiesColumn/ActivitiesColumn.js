import ActivitiesList from "./ActivitiesList/ActivitiesList.js";
import { Grid } from "../Dashboard.styled";
import ActivitiesForm from "./ActivitiesForm/ActivitiesForm.js";
import { useState } from "react";

export default function ActivitiesColumn() {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }
  return (
    <Grid>
      {showForm ? (
        <ActivitiesForm handleShowForm={handleShowForm} />
      ) : (
        <ActivitiesList showForm={showForm} handleShowForm={handleShowForm} />
      )}
    </Grid>
  );
}
