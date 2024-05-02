import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import * as Styled from "./LastEntryTile.styled";
import Link from "next/link";
import Intensity from "@/utils/intensity";

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

  return (
    <>
      <Styled.Container href={`/id:${entryUrl}`}>
        <Styled.HeadContainer>
          <Styled.Pill>
            <Styled.TileH3>Last entry</Styled.TileH3>
          </Styled.Pill>
          <Styled.ColorCircle color={color} />
        </Styled.HeadContainer>
        <Styled.TextContainer>
          {session ? "You " : <Styled.StaticText>Somebody </Styled.StaticText>}
          {location === "unknown" ? (
            ""
          ) : (
            <>
              <Styled.StaticText>in </Styled.StaticText>
              {location.region}
            </>
          )}
          <Styled.StaticText> felt</Styled.StaticText> {experience},{" "}
          <Styled.StaticText>more specifically. </Styled.StaticText>{" "}
          <Intensity value={intensity} experience={experience} />{" "}
          <Styled.StaticText>Selected tags:</Styled.StaticText>{" "}
          {reactions.map((reaction, index, array) => (
            <span key={index}>
              {reaction}
              {index < array.length - 1 && ", "}
            </span>
          ))}
        </Styled.TextContainer>
      </Styled.Container>
    </>
  );
}
