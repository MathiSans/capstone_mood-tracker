import * as Styled from "./ActivityTile.styled";
import { useData } from "@/lib/useData";
import Carousel from "./Carousel/Carousel";
import Activity from "./Activity/Activity";

export default function ActivityTile({ isOnOverviewColumn, activity }) {
  const { activities, isLoadingActivities, errorActivities } =
    useData().fetchedActivities;

  const isToolActivity =
    activity && activity.hasOwnProperty("tool") && activity.tool;

  return (
    <Styled.Container>
      <Styled.Pill>
        <Styled.TileH3>{isToolActivity ? "Tool" : "Tipp"}</Styled.TileH3>
      </Styled.Pill>

      {isOnOverviewColumn && (
        <Carousel>
          {!isLoadingActivities
            ? activities
                .filter(
                  (activity) => activity && activity.hasOwnProperty("tool")
                )
                .map((activity) => (
                  <Activity
                    key={activity._id}
                    activity={activity}
                  />
                ))
            : []}
        </Carousel>
      )}
      {!isOnOverviewColumn && <Activity activity={activity} />}
    </Styled.Container>
  );
}
