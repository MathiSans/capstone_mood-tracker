import { Grid } from "../Dashboard.styled";
import * as Styled from "@/components/Dashboard/Tiles/OutboxTile/OutboxTile.styled";
import InboxTile from "../Tiles/InboxTile/InboxTile";
import OutboxTile from "@/components/Dashboard/Tiles/OutboxTile/OutboxTile";
import FriendsListTile from "@/components/Dashboard/Tiles/FriendsListTile/FriendsListTile";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import useSWR from "swr";
import styled from "styled-components";
import FriendsFilterTile from "../Tiles/FriendsFilterTile/FriendsFilterTile";

export default function CommunityColumn() {
  //Inbox
  const [showSentence, setShowSentence] = useState(true);
  const [showFriendMessages, setShowFriendMessages] = useState(false);
  //Outbox
  const [searchValue, setSearchValue] = useState("");
  const [hug, setHug] = useState("");
  const [flowers, setFlowers] = useState("");
  const [inviteActivity, setInviteActivity] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [send, setSend] = useState("");

  const { data: session } = useSession();

  //Database
  //Entries & Activites
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;

  const { activities, isLoadingActivities, errorActivities } =
    useData().fetchedActivities;

  const userName = session && session.user.name;
  function handleOnTyping(event) {
    setSearchValue(event.target.value);
  }

  //Users and Community
  const { allUsers, isLoadingAllUsers, errorAllUsers } =
    useData().fetchedAllUsers;
  const { allCommunity, isLoadingAllCommunity, errorAllCommunity } =
    useData().fetchedCommunity;

  //Filter Data
  const filteredUsers =
    !isLoadingAllUsers &&
    allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  const getUserName =
    filteredUsers &&
    filteredUsers.find((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  function getLatestEmotion() {
    if (!getUserName) {
      console.log("User not found.");
      return; // Exit early if user not found
    }

    const reversedEntries = allEntries && allEntries.slice().reverse(); // Create a copy and reverse it

    const latestFriendEntry =
      getUserName && reversedEntries
        ? reversedEntries.find(
            (friendEntry) => friendEntry.user === getUserName._id
          )
        : "No Data";
    return latestFriendEntry;
  }

  const handleGetUsername = (userId) => {
    const friendlyRecipient =
      !isLoadingAllUsers &&
      allUsers.filter((friend) => {
        return friend._id === userId;
      });
    return friendlyRecipient[0].name;
  };

  //Design
  function handleShowSentence() {
    setShowSentence(!showSentence);
  }
  const friendsEntry = getUserName && allUsers && getLatestEmotion();
  console.log(friendsEntry, "friendsEntry Column");
  console.log(getUserName, "getUserName Column");

  const currentLocalUserDate = new Date();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          localCreationDate: currentLocalUserDate,
          senderId: session ? session.user.id : null,
          recipientId: getUserName._id,
          entryId: friendsEntry._id,
          hug: hug,
          flowers: flowers,
          activity: inviteActivity,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      mutate();
      setSubmissionStatus("success");
      event.target.reset();
    } catch (error) {
      console.error("Error submitting data:", error);
      setSubmissionStatus("error");
    }
  }
  return (
    <Grid>
      <FriendsFilterTile handleOnTyping={handleOnTyping} userName={userName} />
      <FriendsListTile friendsEntry={friendsEntry} getUserName={getUserName} />
      <InboxTile
        showSentence={showSentence}
        friendsEntry={friendsEntry}
        showFriendMessages={showFriendMessages}
        allCommunity={allCommunity}
        isLoadingAllCommunity={isLoadingAllCommunity}
        setShowFriendMessages={setShowFriendMessages}
        handleGetUsername={handleGetUsername}
      />
      <OutboxTile
        getUserName={getUserName}
        handleSubmit={handleSubmit}
        setFlowers={setFlowers}
        setHug={setHug}
        setSend={setSend}
        setInviteActivity={setInviteActivity}
        handleGetUsername={handleGetUsername}
        isLoadingActivities={isLoadingActivities}
        activities={activities}
        send={send}
      />
    </Grid>
  );
}
