import { useState } from "react";
import useSWR from "swr";
import * as Styled from "./ActivitiesList.styled";
import { FiPlus } from "react-icons/fi";
import { useSession } from "next-auth/react";
import ActivityTile from "../../Tiles/ActivityTile/ActivityTile";

export default function ActivitiesList({ handleShowForm }) {
  const [filterOption, setFilterOption] = useState("activities");
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
    if (filterOption === "activities") {
      return !activity.hasOwnProperty("tool");
    } else if (filterOption === "tools") {
      return activity.hasOwnProperty("tool");
    } else if (filterOption === "myActivities") {
      return activity.user === session.user.id;
    }
  });

  function handleFilter(option) {
    setFilterOption(option);
  }

  return (
    <>
      <Styled.HeaderSwitches>
        <Styled.Switch>
          <Styled.Option
            $isActive={filterOption === "tools"}
            onClick={() => handleFilter("tools")}
          >
            Tools
          </Styled.Option>
          <Styled.Option
            $isActive={filterOption === "activities"}
            onClick={() => handleFilter("activities")}
          >
            Activities
          </Styled.Option>
          {session && (
            <Styled.Option
              $isActive={filterOption === "myActivities"}
              onClick={() => handleFilter("myActivities")}
            >
              my Activities
            </Styled.Option>
          )}
        </Styled.Switch>

        {session && (
          <Styled.CircleBox onClick={handleShowForm}>
            <FiPlus style={{ fontSize: "2rem" }} />
          </Styled.CircleBox>
        )}
      </Styled.HeaderSwitches>

      {filteredActivities.map((activity, index) => (
        <ActivityTile key={index} activity={activity} />
      ))}
    </>
  );
}
