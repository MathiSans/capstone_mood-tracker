import { useSession } from "next-auth/react";
import * as Styled from "./MessagesOverviewTile.styled";
import LinkWrapper from "@/components/LinkWrapper/LinkWrapper";
import { useData } from "@/lib/useData";

export default function MessagesOverviewTile() {
  const { allMessages, isLoadingAllMessages } = useData().fetchedAllMessages;
  return (
    <Styled.OuterContainer>
      <LinkWrapper link={``}>
        <Styled.Container>
          <Styled.HeadContainer>
            <Styled.Pill>
              <Styled.TileH3>Last reactions</Styled.TileH3>
            </Styled.Pill>
          </Styled.HeadContainer>
          {!isLoadingAllMessages && (
            <Styled.TextContainer>
              {allMessages?.map((message, index, array) => (
                <span key={index}>
                  {message.message}
                  {index < array.length - 1 && " "}
                </span>
              ))}
            </Styled.TextContainer>
          )}
        </Styled.Container>
      </LinkWrapper>
    </Styled.OuterContainer>
  );
}
