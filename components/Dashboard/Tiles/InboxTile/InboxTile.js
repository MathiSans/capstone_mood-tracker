import * as Styled from "./InboxTile.styled";
import { useSession } from "next-auth/react";
import {
  Sentence,
  StaticText,
} from "@/components/EntriesList/EntriesList.styled";
import Intensity from "@/utils/intensity";

export default function InboxTile({ showSentence }) {
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
                  {entry.location === "unknown" ? (
                    ""
                  ) : (
                    <>
                      <StaticText>in </StaticText>
                      {entry.location.region}
                    </>
                  )}
                  <StaticText> felt</StaticText> {entry.experience}.{" "}
                  <StaticText>More specifically</StaticText>{" "}
                  <Intensity
                    value={entry.intensity}
                    experience={entry.experience}
                  />
                  <StaticText>. You selected these tags:</StaticText>{" "}
                  {entry.reactions.map((reaction, index, array) => (
                    <span key={index}>
                      {reaction}
                      {index < array.length - 1 && ", "}
                    </span>
                  ))}
                </Sentence>
                <StaticText style={{ color: "white" }}>
                  Friends Messages:
                  {showFriendMessages ? (
                    <>
                      {" "}
                      {!isLoadingAllCommunity &&
                        allCommunity
                          .filter((friends) => {
                            return friends.entryId === entry._id;
                          })
                          .map((message) => {
                            console.log("message", message);
                            const senderUsername =
                              message.senderId === null
                                ? "Anonym"
                                : getUsername(message.senderId);
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
                          return friends.entryId === entry._id;
                        }).length
                      }
                    </div>
                  )}
                </StaticText>
                <StaticText>{entry.time}</StaticText>{" "}
              </div>
            )}
          </div>
        </>
      </>
    </Styled.Container>
  );
}
