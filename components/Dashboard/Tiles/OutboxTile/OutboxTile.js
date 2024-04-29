import * as Styled from "./OutboxTile.styled";
import { FaPlusCircle } from "react-icons/fa";
import Picker from "emoji-picker-react";
import EntryTile from "../EntryTile/EntryTile";
import { FiDelete } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { EmojiContainer } from "../../ActivitiesColumn/ActivitiesForm/ActivitiesForm.styled";
import { Emojis } from "../../ActivitiesColumn/ActivitiesForm/ActivitiesForm.styled";
import { DeleteButton } from "../../ActivitiesColumn/ActivitiesForm/ActivitiesForm.styled";
import { AddEmojisSentence } from "../../ActivitiesColumn/ActivitiesForm/ActivitiesForm.styled";
import { addButton } from "@/components/ActivitiesForm/ActivitiesForm.styled";
import styled from "styled-components";

export default function OutboxTile({
  handleSubmit,
  setFlowers,
  setHug,
  setSend,
  setInviteActivity,
  getUserName,
  isLoadingActivities,
  activities,
  send,
  friendsEntry,
  searchValue,
  latestFriendsEntries,
  handleGetUsername,
  isLoadingAllUsers,
  showFriendMessages,
  setShowFriendMessages,
  handleOutboxReaction,
  sendGift,
  setSendGift,
}) {
  return (
    <Styled.Container>
      <h2>
        OUTBOX<span>{sendGift}</span>
      </h2>{" "}
      <form onSubmit={handleSubmit}>
        <button
          onClick={() => {
            setFlowers("💐");
            setSend("💐");
          }}
        >
          Send Flowers 💐
        </button>
        <button
          onClick={() => {
            setHug("🤗");
            setSend("🤗");
          }}
        >
          Send Hugs 🤗
        </button>
        <b>
          {"       "}to{" "}
          <span style={{ color: "yellow" }}>
            {getUserName ? getUserName.name : "no username"}
          </span>
        </b>

        <b>
          {"       "}Invite{" "}
          <span style={{ color: "yellow" }}>
            {getUserName ? getUserName.name : "no username"}
          </span>{" "}
          to{" "}
          <select
            onChange={(event) => {
              setInviteActivity(event.target.value);
              setSend(event.target.value);
            }}
          >
            <option value={false}>--choose activity--</option>
            {!isLoadingActivities &&
              activities.map(({ _id, title, emoji }) => (
                <option key={_id} value={`${title} ${emoji}`}>
                  {title}
                </option>
              ))}
          </select>
          Activity
        </b>
        <h1>{send}</h1>
        <br />

        <button type="submit">Send</button>
      </form>
      {/* <section>
        {searchValue === ""
          ? ""
          : friendsEntry && (
              <p>
                Your friend{" "}
                <b style={{ color: "lightblue" }}>{getUserName.name}</b> felt on{" "}
                <b style={{ color: "lightblue" }}>{friendsEntry.time}</b>
                {"  "}
                <b style={{ color: friendsEntry.color }}>
                  {friendsEntry.experience}
                </b>
              </p>
            )}
      </section> */}
      <div style={{ paddingBottom: "6rem", overflowX: "scroll" }}>
        {showFriendMessages && (
          <Picker
            style={{
              position: "absolute",
              top: "90px",
              left: "0",
              zIndex: "10",
            }}
            pickerStyle={{ width: "100%" }}
            onEmojiClick={(emojiObject) => {
              handleOutboxReaction(emojiObject.emoji);
            }}
          />
        )}

        {showFriendMessages && (
          <Picker
            // reactions={["U+1F618,1F917,FE0F,1F49A,1F338"]}
            theme={"dark"}
            reactionsDefaultOpen={true}
            onEmojiClick={(emojiObject) => {
              handleOutboxReaction(emojiObject.emoji);
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            overflow: "hidden",

            width: "fit-content",
          }}
        >
          {latestFriendsEntries.map(
            ({
              _id,
              experience,
              time,
              color,
              intensity,
              reactions,
              location,
              user,
            }) => {
              // onEntryRender(_id);
              return (
                <div
                  key={_id}
                  style={{
                    height: "160px",
                    width: "160px",
                    position: "relative",
                  }}
                >
                  <EntryTile
                    experience={experience}
                    time={time}
                    color={color}
                    intensity={intensity}
                    reactions={reactions}
                    entryUrl={_id}
                    location={location}
                  />
                  <FriendsNamePill>{handleGetUsername(user)}</FriendsNamePill>
                  <div
                    style={{
                      position: "absolute",
                      top: "38%",
                      right: "52%",

                      width: "10px",
                      height: "10px",
                    }}
                  >
                    <EmojiContainer>
                      {sendGift.length !== 0 ? (
                        <>
                          <Emojis $inputString={sendGift}>{sendGift}</Emojis>
                          <DeleteButton
                            onClick={() => {
                              setSendGift(sendGift.slice(0, -1));
                            }}
                          >
                            <FiDelete />
                          </DeleteButton>
                        </>
                      ) : null}
                      {sendGift.length < 5 && (
                        <>
                          <AddButton
                            type="button"
                            onClick={() =>
                              setShowFriendMessages(!showFriendMessages)
                            }
                          >
                            <FiPlus />
                          </AddButton>
                          {sendGift.length === 0 && (
                            <AddEmojisSentence>add emojis</AddEmojisSentence>
                          )}
                        </>
                      )}
                    </EmojiContainer>
                  </div>
                </div>
              );
            }
          )}
        </div>
        {/* {latestFriendsEntries.map(
          ({ experience, reactions, _id, time, user, color }) => {
            return (
              <>
                <p
                  key={_id}
                  style={{ padding: "5px", boxShadow: `2px 2px 4px ${color}` }}
                >
                  <b>{!isLoadingAllUsers && handleGetUsername(user)}</b> felt on{" "}
                  <b>{time}</b> <b>{experience}.</b>
                  {"  "} Reaction:
                  <b>{reactions}</b>
                </p>
                <FaPlusCircle
                  onClick={() => {
                    setShowFriendMessages(!showFriendMessages);
                  }}
                />
              </>
            );
          }
        )} */}
      </div>
    </Styled.Container>
  );
}

const AddButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  font-size: 2rem;
  color: var(--color-main-alt);
  background-color: black;
  z-index: 100;
  position: absolute;
  border-radius: 50%;
`;

const FriendsNamePill = styled.div`
  width: 6rem;
  height: 2rem;
  border-radius: 30%;
  position: absolute;
  z-index: 100;
  top: 0.5rem;
  left: 0.5rem;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  border: 1px solid white;
`;
