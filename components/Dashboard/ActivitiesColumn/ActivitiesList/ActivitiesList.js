import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { useSession } from "next-auth/react";
import ActivityTile from "../../Tiles/ActivityTile/ActivityTile";

export default function ActivitiesList({ handleShowForm }) {
  const [filterOption, setFilterOption] = useState("all");
  const { data: session } = useSession();
  const { data: initialActivities, isLoading } = useSWR("/api/activities");

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!initialActivities) {
    return null;
  }

  const sortedActivities = [...initialActivities].reverse();

  const filteredActivities = sortedActivities.filter((activity) => {
    if (filterOption === "all") {
      return true;
    } else if (filterOption === "tools") {
      return activity.hasOwnProperty("tool");
    }
  });

  function handleFilter(option) {
    setFilterOption(option);
  }

  return (
    <>
      <HeaderSwitches>
        <Switch>
          <Option
            $isActive={filterOption === "all"}
            onClick={() => handleFilter("all")}
          >
            All Activities
          </Option>
          <Option
            $isActive={filterOption === "tools"}
            onClick={() => handleFilter("tools")}
          >
            Tools
          </Option>
        </Switch>

        {session && (
          <CircleBox onClick={handleShowForm}>
            <FiPlus style={{ fontSize: "2rem" }} />
          </CircleBox>
        )}
      </HeaderSwitches>

      {filteredActivities.map((activity, index) => (
        <ActivityTile key={index} activity={activity} />
      ))}
    </>
  );
}

const HeaderSwitches = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  height: auto; /* Änderung der Höhe auf auto */
  position: relative;
  grid-column-end: span 4;
  grid-row-end: span 1;
`;

const Switch = styled.div`
  display: flex;
  flex-direction: row;
`;

const Option = styled.div`
  cursor: pointer;
  padding: 10px;
  color: ${(props) => (props.$isActive ? "#303030" : "#f8f8f8")};
  background-color: ${(props) => (props.$isActive ? "#f8f8f8" : "#303030")};
  border-radius: 5px;
  margin-right: 10px;
  transition: all 0.3s ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#e0e0e0" : "#505050")};
  }
`;

const CircleBox = styled.div`
  background-color: #f8f8f8;
  color: #303030;
  border-radius: 50%;
  margin-bottom: 20px;
  width: 40px; /* Verkleinerung der Breite auf 40px */
  height: 40px; /* Festlegen der Höhe auf 40px */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 50%; /* Zentrieren vertikal */
  transform: translateY(-50%); /* Korrektur für die Zentrierung */
`;
