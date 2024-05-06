import * as Styled from "./InboxTile.styled";
import {
  Tile,
  PillText,
  Pill,
  InfoTextTopRight,
  Header,
} from "../Tiles.styled";

export default function InboxTile({
  allUsers,
  allMessages,
  session,
  allEntries,
}) {
  const messagesForUser = allMessages.filter(
    (message) => message.recipientId === session.user.id
  );
  return (
    <Tile $columns="4" $rows="2">
      <Header>
        <Pill>
          <PillText>Inbox</PillText>
        </Pill>
        <InfoTextTopRight>
          See your friends reactions to your entries
        </InfoTextTopRight>
      </Header>
      <Styled.MessagesListContainer>
        <Styled.MessagesList>
          <Styled.InfoText>
            you have {messagesForUser.length}{" "}
            {messagesForUser.length < 2 ? "reaction" : "reactions"} to your
            entries
          </Styled.InfoText>
          {messagesForUser.map((message, index) => {
            const entry = allEntries.find(
              (entry) => entry._id === message.entryId
            );
            const sender = allUsers.find(
              (entry) => entry._id === message.senderId
            );
            return (
              <Styled.MessageBox key={index}>
                <div>from {sender.name}:</div>
                <Styled.Emojis>{message.message}</Styled.Emojis>
                <Styled.ColorCircle color={entry ? entry.color : "grey"} />
              </Styled.MessageBox>
            );
          })}
        </Styled.MessagesList>
      </Styled.MessagesListContainer>
    </Tile>
  );
}
