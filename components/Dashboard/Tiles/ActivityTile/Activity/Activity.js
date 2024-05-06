import * as Styled from "./Activity.styled";
import LinkWrapper from "@/components/LinkWrapper/LinkWrapper";
import RandomIcon from "../RandomIcon/RandomIcon.js";

export default function Activity({ activity }) {
  return (
    <>
      {activity.link ? (
        <LinkWrapper link={activity.link}>
          <Styled.TileH2>{activity.title}</Styled.TileH2>
          <Styled.ActivityDescription>
            {activity.description}
          </Styled.ActivityDescription>
          <RandomIcon activity={activity} />
        </LinkWrapper>
      ) : (
        <>
          <Styled.TileH2>{activity.title}</Styled.TileH2>
          <Styled.ActivityDescription>
            {activity.description}
          </Styled.ActivityDescription>
          <RandomIcon activity={activity} />
        </>
      )}
    </>
  );
}
