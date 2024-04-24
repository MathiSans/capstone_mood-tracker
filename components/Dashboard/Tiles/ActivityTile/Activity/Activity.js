import * as Styled from "./Activity.styled";
import { ActivityLink } from "./Activity.styled";

export default function Activity({ activity }) {
  return (
    <>
      <ActivityLink href={activity.link}>
        <Styled.TileH2>{activity.title}</Styled.TileH2>
        <Styled.ActivityDescription>
          {activity.description}
        </Styled.ActivityDescription>
      </ActivityLink>
    </>
  );
}
