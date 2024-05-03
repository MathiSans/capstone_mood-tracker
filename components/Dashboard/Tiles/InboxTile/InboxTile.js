import * as Styled from "./InboxTile.styled";

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
    <Styled.Container>
      Inbox
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
    </Styled.Container>
  );
}
