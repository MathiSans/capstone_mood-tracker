import * as Styled from "./InboxTile.styled";
import { useSession } from "next-auth/react";
import {
  Sentence,
  StaticText,
} from "@/components/EntriesList/EntriesList.styled";
import Intensity from "@/utils/intensity";
import styled from "styled-components";

export default function InboxTile({
  showSentence,
  allCommunity,
  isLoadingAllCommunity,
  handleGetUsername,
  setShowFriendMessages,
  showFriendMessages,
  friendsEntry,
}) {
  const { data: session } = useSession();

  return (
    <Styled.Container>
      {/* <div>
        {showSentence && friendsEntry && (
          <div>
            <Sentence>
              {session ? "You " : <StaticText>Somebody </StaticText>}
              {friendsEntry.location === "unknown" ? (
                ""
              ) : (
                <>
                  <StaticText>in </StaticText>
                  {friendsEntry.location.region}
                </>
              )}
              <StaticText> felt</StaticText> {friendsEntry.experience}.{" "}
              <StaticText>More specifically</StaticText>{" "}
              <Intensity
                value={friendsEntry.intensity}
                experience={friendsEntry.experience}
              />
              <StaticText>. You selected these tags:</StaticText>{" "}
              {friendsEntry.reaction}
            </Sentence>
            <StaticText style={{ color: "white" }}>
              Friends Messages:
              {showFriendMessages ? (
                <>
                  {" "}
                  {!isLoadingAllCommunity &&
                    allCommunity
                      .filter((friends) => {
                        return friends.entryId === friendsEntry._id;
                      })
                      .map((message) => {
                        console.log("message", message);
                        const senderUsername =
                          message.senderId === null
                            ? "Anonym"
                            : handleGetUsername(message.senderId);
                        return (
                          <>
                            <p
                              onClick={() => {
                                setShowFriendMessages(!showFriendMessages);
                              }}
                              style={{
                                fontSize: "11px",
                                color: "white",
                              }}
                              key={message._id}
                            >
                              {senderUsername} send you
                              {message.flowers} and invited you to{"  "}
                              {message.activity}
                            </p>
                          </>
                        );
                      })}
                </>
              ) : (
                <div
                  onClick={() => {
                    setShowFriendMessages(!showFriendMessages);
                  }}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "1.7rem",
                    height: "1.7rem",
                    padding: "0.3rem",
                    fontSize: "1rem",
                    borderRadius: "50%",
                    fontWeight: "bold",
                    border: "solid 1px whitesmoke",
                  }}
                >
                  {
                    allCommunity.filter((friends) => {
                      return friends.entryId === friendsEntry._id;
                    }).length
                  }
                </div>
              )}
            </StaticText>
            <StaticText>{friendsEntry.time}</StaticText>{" "}
          </div>
        )}
      </div> */}
      <MessageContainers>
        <FriendsLastEntry>
          <FriendsEmotionColorCircle color={"red"} />
          {showSentence &&
            friendsEntry &&
            !isLoadingAllCommunity &&
            allCommunity
              .filter((friends) => {
                return friends.entryId === friendsEntry._id;
              })
              .map((message) => {
                console.log("message", message);
                const senderUsername =
                  message.senderId === null
                    ? "Anonym"
                    : handleGetUsername(message.senderId);
                return (
                  <div
                    onClick={() => {
                      setShowFriendMessages(showFriendMessages);
                    }}
                    key={message._id}
                    style={{
                      width: "100%",
                      height: "100%",

                      position: "absolute",
                      top: "30%",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "100 px",
                        width: "100%",
                        height: "100%",
                        color: "white",
                      }}
                      key={message._id}
                    >
                      {message.flowers}
                      {message.hugs}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        width: "100%",
                        height: "100%",
                        color: "white",
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                      key={message._id}
                    >
                      from {"     "}
                      {senderUsername}
                    </span>
                  </div>
                );
              })}
        </FriendsLastEntry>
        <FriendsLastEntry>
          <FriendsEmotionColorCircle color={"green"} />2
        </FriendsLastEntry>
        <FriendsLastEntry>
          <FriendsEmotionColorCircle color={"purple"} />3
        </FriendsLastEntry>
        <FriendsLastEntry>
          <FriendsEmotionColorCircle color={"yellow"} />3
        </FriendsLastEntry>
      </MessageContainers>
    </Styled.Container>
  );
}

const FriendsLastEntry = styled.div`
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  width: 150px;
  height: 150px;
  padding: 0;
  position: relative;
`;

const FriendsEmotionColorCircle = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: 20%;
`;
export const MessageContainers = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  gap: 1rem;
`;
