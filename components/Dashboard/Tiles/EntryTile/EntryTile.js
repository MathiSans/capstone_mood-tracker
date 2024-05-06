import getWeekdayFromTime from "@/utils/getWeekdayFromTime";
import { useSession } from "next-auth/react";
import * as Styled from "./EntryTile.styled";
import Intensity from "@/utils/intensity";
import LinkWrapper from "@/components/LinkWrapper/LinkWrapper";

export default function EntryTile({
  userName,
  inOutboxTile,
  experience,
  time,
  color,
  intensity,
  reactions,
  entryUrl,
  location,
}) {
  const { data: session } = useSession();

  const Content = (inOutboxTile) => (
    <Styled.Container>
      <Styled.ColorCircle color={color} />
      <Styled.TextContainer>
        {inOutboxTile ? userName : session ? "You" : "Somebody"}{" "}
        {location?.region && (
          <>
            <Styled.StaticText>in </Styled.StaticText>
            {location.region}
          </>
        )}
        <Styled.StaticText> felt</Styled.StaticText> {experience},{" "}
        <Styled.StaticText>more specifically</Styled.StaticText>{" "}
        <Intensity value={intensity} experience={experience} />.
        <Styled.StaticText> Selected tags: </Styled.StaticText>{" "}
        {reactions.map((reaction, index, array) => (
          <span key={index}>
            {reaction}
            {index < array.length - 1 && ", "}
          </span>
        ))}
      </Styled.TextContainer>
      <Styled.Pill>
        <Styled.TileH3>
          {getWeekdayFromTime(time)}, {time}
        </Styled.TileH3>
      </Styled.Pill>
    </Styled.Container>
  );

  return (
    <Styled.OuterContainer>
      {!inOutboxTile ? (
        <LinkWrapper link={`/id:${entryUrl}`}>{Content()}</LinkWrapper>
      ) : (
        <>{Content(inOutboxTile)}</>
      )}
    </Styled.OuterContainer>
  );
}
