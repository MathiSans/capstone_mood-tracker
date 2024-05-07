import React from "react";
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
      <Styled.Pill>
        <Styled.TileH3>
          {getWeekdayFromTime(time)}, {time}
        </Styled.TileH3>
        <Styled.ColorCircle color={color} />
      </Styled.Pill>
      <Styled.TextContainer>
        <Styled.TextBlock>
          {inOutboxTile ? (
            <Styled.EntryText>{userName} </Styled.EntryText>
          ) : session ? (
            "You "
          ) : (
            <Styled.EntryText>Somebody </Styled.EntryText>
          )}
          {location !== "unknown" && (
            <>
              in
              <Styled.EntryText color={color}>
                {" "}
                {location.region}{" "}
              </Styled.EntryText>
            </>
          )}
          <Styled.EntryText> experienced </Styled.EntryText>
          <Styled.EntryText color={color}>{experience}</Styled.EntryText>,
          <Styled.EntryText> more specifically </Styled.EntryText>
          <Styled.EntryText color={color}>
            <Intensity value={intensity} experience={experience} />
          </Styled.EntryText>
          . Selected tags:{" "}
          {reactions.map((reaction, index, array) => (
            <React.Fragment key={index}>
              <Styled.EntryText color={color}>
                {reaction}
                {index < array.length - 1 && ", "}
              </Styled.EntryText>
            </React.Fragment>
          ))}
        </Styled.TextBlock>
      </Styled.TextContainer>
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
