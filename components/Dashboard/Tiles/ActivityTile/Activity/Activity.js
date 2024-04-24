import * as Styled from "./Activity.styled";

export default function Activity({ activity }) {
  return (
    <>
      <Styled.TileH2>{activity.title}</Styled.TileH2>
      <Styled.ActivityDescription>
        {activity.description}
      </Styled.ActivityDescription>
    </>
  );
}
