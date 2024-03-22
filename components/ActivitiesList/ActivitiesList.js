import * as Styled from "./ActivitiesList.styled";
import { useState } from "react";
import { motion } from "framer-motion";
import NavButton from "../NavButton/NavButton";
import useSWR from "swr";
import { FiPlus } from "react-icons/fi";

export default function ActivitiesList({ handleShowForm }) {

  const [filterPhrase, setFilterPhrase] = useState();

  const { data: activities, isLoading } = useSWR("/api/activities");

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!activities) {
    return;
  }

  const filteredActivities = activities.filter((activity) => {
    if (!filterPhrase || filterPhrase === "all") {
      return true;
    } else if (filterPhrase === "tools") {
      return activity.hasOwnProperty("tool");
    } else if (Array.isArray(activity.forEmotion)) {
      return activity.forEmotion.includes(filterPhrase);
    }
  });

  function handleFilter(event) {
    setFilterPhrase(event.target.value);
  }

  return (
    <>
      <form>
        <label>
          <Styled.Select
            name="emotions"
            size="1"
            onChange={(event) => {
              handleFilter(event);
            }}
          >
            <option value={"all"}>show all</option>
            <option value={"tools"}>tools</option>
            <option disabled>------</option>
            <option value={"fear"}>handle fear</option>
            <option value={"anger"}>handle anger</option>
            <option value={"enjoyment"}>handle enjoyment</option>
            <option value={"disgust"}>handle disgust</option>
            <option value={"sadness"}>handle sadness</option>
          </Styled.Select>
        </label>
      </form>
      <Styled.Grid>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Styled.Card
            onClick={handleShowForm}
            style={{ height: "250px", justifyContent: "center" }}
          >
            <FiPlus style={{ fontSize: "3rem" }} />
            <Styled.Description>add a new activity</Styled.Description>
          </Styled.Card>
        </motion.div>
        {filteredActivities.map((activity, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Styled.Card>
              {activity.tool ? <Styled.Tag>tool</Styled.Tag> : null}
              <Styled.Emoji>{activity.emoji}</Styled.Emoji>
              <Styled.Title>{activity.title}</Styled.Title>
              <Styled.Description>{activity.description}</Styled.Description>
              {activity.tool ? (
                <NavButton linkToPage={activity.link}>start</NavButton>
              ) : null}
            </Styled.Card>
          </motion.div>
        ))}
      </Styled.Grid>
    </>
  );
}
