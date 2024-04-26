import * as Styled from "./InboxTile.styled";
import { useSession } from "next-auth/react";
import {
  Sentence,
  StaticText,
} from "@/components/EntriesList/EntriesList.styled";
import Intensity from "@/utils/intensity";

export default function InboxTile({
  showSentence,
  allCommunity,
  isLoadingAllCommunity,
  handleGetUsername,
  setShowFriendMessages,
  showFriendMessages,
  friendsEntry,
  getUserName,
}) {
  const { data: session } = useSession();
  return (
    <Styled.Container>
      <>
        <>
          <div>
            {showSentence && (
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
          </div>
        </>
      </>
    </Styled.Container>
  );
}
