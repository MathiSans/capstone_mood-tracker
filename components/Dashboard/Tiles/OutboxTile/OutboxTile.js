import EntryTile from "../EntryTile/EntryTile";
import * as Styled from "./OutboxTile.styled";
import {
  Tile,
  PillText,
  Pill,
  InfoTextTopRight,
  Header,
} from "../Tiles.styled";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Picker from "emoji-picker-react";
import { TileH2 } from "../ActivityTile/Activity/Activity.styled";
import { motion, AnimatePresence } from "framer-motion";

export default function OutboxTile({
  allMessages,
  latestEntriesFromFriends,
  allUsers,
  handleAddMessage,
  handleDeleteMessage,
}) {
  const [selectedTile, setSelectedTile] = useState(null);

  function handleClick(id) {
    setSelectedTile(selectedTile === id ? null : id);
  }

  return (
    <Tile $columns="4" $rows="3">
      <Header>
        <Pill>
          <PillText>Outbox</PillText>
        </Pill>
        <InfoTextTopRight>React to your friends entries</InfoTextTopRight>
      </Header>
      <Styled.EntriesListContainer>
        <Styled.EntriesList>
          {latestEntriesFromFriends.map((entry, index) => {
            const user = allUsers.find((user) => user._id === entry.user);
            const userName = user ? user.name : "no name found";
            const messageForThisEntry = allMessages.find(
              (message) => message.entryId === entry._id
            );
            return (
              <Styled.EntryContainer key={index}>
                {(!messageForThisEntry ||
                  messageForThisEntry.message.length < 3) && (
                  <Picker
                    reactionsDefaultOpen="true"
                    searchDisabled="true"
                    open={selectedTile === entry._id}
                    theme="dark"
                    style={{
                      position: "absolute",
                      bottom: "46px",
                      left: "0px",
                      zIndex: "1000",
                    }}
                    pickerStyle={{ width: "100%" }}
                    onEmojiClick={(emojiObject) => {
                      handleAddMessage(
                        entry.user,
                        entry._id,
                        emojiObject.emoji
                      );
                      handleClick(entry._id);
                    }}
                  />
                )}
                <Styled.EntryTileContainer>
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
                </Styled.EntryTileContainer>
                <Styled.ReactionsContainer $color={entry.color}>
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
                      messageForThisEntry.message.length < 3) && (
                      <Styled.CrossIcon onClick={() => handleClick(entry._id)}>
                        <motion.div
                          animate={{
                            rotate:
                              selectedTile === entry._id ? "45deg" : "0deg",
                          }}
                        >
                          <FiPlus />
                        </motion.div>
                      </Styled.CrossIcon>
                    )}
                    {!messageForThisEntry && "add a reaction"}
                  </Styled.EmojiContainer>
                </Styled.ReactionsContainer>
              </Styled.EntryContainer>
            );
          })}
        </Styled.EntriesList>
      </Styled.EntriesListContainer>
    </Tile>
  );
}
