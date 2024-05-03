import EntryTile from "../EntryTile/EntryTile";
import * as Styled from "./OutboxTile.styled";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Picker from "emoji-picker-react";

export default function OutboxTile({
  allMessages,
  latestEntriesFromFriends,
  allUsers,
  handleAddMessage,
  handleDeleteMessage,
}) {
  const [selectedTile, setSelectedTile] = useState(null);

  return (
    <Styled.Container>
      the three latest entries of your friends
      <Styled.EntriesListContainer>
        <Styled.EntriesList>
          {latestEntriesFromFriends.map((entry, index) => {
            const user = allUsers.find((user) => user._id === entry.user);
            const userName = user ? user.name : "no name found";
            const messageForThisEntry = allMessages.find(
              (message) => message.entryId === entry._id
            );
            return (
              <div
                style={{
                  position: "relative",
                  height: "160px",
                  width: "160px",
                }}
                key={index}
              >
                {" "}
                {(!messageForThisEntry ||
                  messageForThisEntry.message.length < 3) && (
                  <Picker
                    reactionsDefaultOpen="true"
                    searchDisabled="true"
                    open={selectedTile === entry._id}
                    theme="dark"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      zIndex: "1000",
                    }}
                    pickerStyle={{ width: "100%" }}
                    onEmojiClick={(emojiObject) => {
                      handleAddMessage(
                        entry.user,
                        entry._id,
                        emojiObject.emoji
                      );
                      setSelectedTile(
                        selectedTile === entry._id ? null : entry._id
                      );
                    }}
                  />
                )}
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Styled.EmojiContainer>
                    {messageForThisEntry?.message.map((message, index) => (
                      <Styled.Emojis
                        onClick={() => handleDeleteMessage(entry._id, index)}
                        key={index}
                      >
                        {message}
                      </Styled.Emojis>
                    ))}
                    {(!messageForThisEntry ||
                      messageForThisEntry.message.length < 3) &&
                      (selectedTile === entry._id ? (
                        <IoClose
                          onClick={() =>
                            setSelectedTile(
                              selectedTile === entry._id ? null : entry._id
                            )
                          }
                          style={{ fontSize: "2rem", cursor: "pointer" }}
                        />
                      ) : (
                        <FiPlus
                          onClick={() =>
                            setSelectedTile(
                              selectedTile === entry._id ? null : entry._id
                            )
                          }
                          style={{ fontSize: "2rem", cursor: "pointer" }}
                        />
                      ))}

                    <Styled.AddEmojisSentence>
                      {!messageForThisEntry && "add a reaction"}
                    </Styled.AddEmojisSentence>
                  </Styled.EmojiContainer>
                </div>
                <EntryTile
                  inOutboxTile
                  userName={userName}
                  experience={entry.experience}
                  time={entry.time}
                  color={entry.color}
                  intensity={entry.intensity}
                  reactions={entry.reactions}
                  entryUrl={entry.entryUrl}
                  location={entry.location}
                />
              </div>
            );
          })}
        </Styled.EntriesList>
      </Styled.EntriesListContainer>
    </Styled.Container>
  );
}
