import activities from "@/activities.json";
import * as Styled from "./ActivitiesList.styled";
import { useState } from "react";
import { motion } from "framer-motion";
import NavButton from "../NavButton/NavButton";
import useSWR from "swr";

export default function ActivitiesList() {
  const [filterPhrase, setFilter] = useState();

  const { data: activities, isLoading } = useSWR("/api/activities");
  // const { mutate } = useSWRConfig();

  if (isLoading) {
    return <p>Loading...</p>;
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
    setFilter(event.target.value);
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
