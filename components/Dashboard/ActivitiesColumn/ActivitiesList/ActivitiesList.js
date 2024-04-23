import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { useSession } from "next-auth/react";

export default function ActivitiesList({ handleShowForm }) {
  const [filterPhrase, setFilterPhrase] = useState();
  const { data: session } = useSession();
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
    } else if (filterPhrase === "myActivities") {
      return activity.hasOwnProperty("user") && typeof activity.user !== null;
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
      <HeaderSwitches>
        <select
          name="emotions"
          size="1"
          onChange={(event) => {
            handleFilter(event);
          }}
        >
          <option value={"all"}>All Entries</option>
          <option value={"tools"}>Tools</option>
        </select>
        {session && (
          <CircleBox onClick={handleShowForm}>
            <FiPlus style={{ fontSize: "3rem" }} />
          </CircleBox>
        )}
      </HeaderSwitches>

      <ActivitiesListOption>
        {filteredActivities.map((activity, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <WhiteBox>
              {activity.tool ? <span>tool</span> : null}
              <span>{activity.emoji}</span>
              <h2>{activity.title}</h2>
              <p>{activity.description}</p>
            </WhiteBox>
          </motion.div>
        ))}
      </ActivitiesListOption>
    </>
  );
}

const HeaderSwitches = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 3%;
  width: 100%;
  height: 100%;
  position: relative;
  grid-column-end: span 4;
  grid-row-end: span 1;
`;

const CircleBox = styled.div`
  background-color: #f8f8f8;
  color: #303030;
  border-radius: 50%;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
`;

const ActivitiesListOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 3%;
  width: 100%;
  height: 100%;
  grid-column-end: span 4;
  grid-row-end: span 4;
`;

const WhiteBox = styled.div`
  background-color: #303030;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
`;
