import { useSession } from "next-auth/react";
import * as Styled from "./LastEntryTile.styled";
import Intensity from "@/utils/intensity";
import LinkWrapper from "@/components/LinkWrapper/LinkWrapper";

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
    <Styled.OuterContainer>
      <LinkWrapper link={`/id:${entryUrl}`}>
        <Styled.Container>
          <Styled.Pill>
            <Styled.TileH3>Last entry</Styled.TileH3>
            <Styled.ColorCircle color={color} />
          </Styled.Pill>
          <Styled.TextContainer>
            {session ? (
              "You "
            ) : (
              <Styled.StaticText>Somebody </Styled.StaticText>
            )}
            {location?.region && (
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
      </LinkWrapper>
    </Styled.OuterContainer>
  );
}
