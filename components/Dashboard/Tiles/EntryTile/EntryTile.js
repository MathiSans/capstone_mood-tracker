import getWeekdayFromTime from "@/utils/getWeekdayFromTime";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import * as Styled from "./EntryTile.styled";
import Link from "next/link";
import Intensity from "@/utils/intensity";
import { nanoid } from "nanoid";

export default function EntryTile({
  experience,
  time,
  color,
  intensity,
  reactions,
  entryUrl,
  location,
}) {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(location);
  const showLocation = location.city || location.region === "unknown";

  return (
    <>
      <Styled.Container href={`/${entryUrl}`}>
        <Styled.TextContainer>
          {session ? "You " : <Styled.StaticText>Somebody </Styled.StaticText>}
          {showLocation && (
            <>
              <Styled.StaticText>in </Styled.StaticText>
              {location && location.city && location.region && location.region}
            </>
          )}
          <Styled.StaticText> felt</Styled.StaticText> {experience}.{" "}
          <Styled.StaticText>More specifically</Styled.StaticText>{" "}
          <Intensity value={intensity} experience={experience} />
          {Array.isArray(reactions) && reactions.length > 0 && (
            <Styled.StaticText>
              . {session ? "You" : "They"} selected these tags:
            </Styled.StaticText>
          )}{" "}
          {Array.isArray(reactions) &&
            reactions.map((reaction, index) => (
              <span key={nanoid()}>
                {reaction}
                {index < reactions.length - 1 && ", "}
              </span>
            ))}
        </Styled.TextContainer>
        {time && (
          <>
            {getWeekdayFromTime(time)},
            <br />
            {time}
          </>
        )}
        <Styled.ColorCircle color={color} />
      </Styled.Container>
    </>
  );
}
