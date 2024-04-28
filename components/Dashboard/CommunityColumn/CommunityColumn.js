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
import { signIn } from "next-auth/react";

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
  const [sendGift, setSendGift] = useState("");

  const { data: session } = useSession();

  const userId = session?.user.id;
  const myUserId = session?.user.id;

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

  const handleGetUserGifts = (id) => {
    if (session) {
      const arrayOfGiftEntriesList = allCommunity.filter((item) => {
        return id === item.recipientId;
      });
      return arrayOfGiftEntriesList;
    } else {
      return null;
    }
  };

  const myGifts = handleGetUserGifts(myUserId);
  const giftEntriesIds = myGifts
    ? myGifts.map((entry) => entry.entryId)
    : ["Please Login!"];

  console.log("userEntries Before gift entries", userEntries);

  const entriesWithUserIdGifts =
    !isLoadingEntries &&
    userEntries &&
    session &&
    userEntries.filter((item) =>
      giftEntriesIds.some((giftEntry) => giftEntry._id === item.id)
    );

  const handleGetGiftedUserEntries = (entryId) => {};

  console.log("giftEntriesIds", giftEntriesIds);
  console.log("handleGetUserGifts", handleGetUserGifts(myUserId));

  console.log("entriesWithUserIdGifts", entriesWithUserIdGifts);

  // userEntries.filter((giftEntry) => {
  //   return;
  //   giftEntry._id === allCommunities[index].entryId;
  //
  //FriendsList

  const handleGetFriendsList = (names) => {
    const friendsList =
      !isLoadingAllUsers &&
      allUsers.filter((friend) => {
        return names.some((name) =>
          friend.name.toLowerCase().includes(name.toLowerCase())
        );
      });
    return friendsList;
  };

  const moodies = handleGetFriendsList([
    "Niko",
    "Jan",
    "Mathis",
    "ramin",
    "crash",
  ]);
  console.log("moodies", moodies);

  const latestFriendsEntries = moodies.map((moodie) => {
    const filteredEntries = allEntries.filter(
      (entry) => entry.user === moodie._id
    );
    if (filteredEntries.length > 0) {
      const latestEntry = filteredEntries.sort((a, b) => {
        return new Date(b.time) - new Date(a.time);
      })[0];
      return latestEntry;
    } else {
      return null; // If no entry is found for the moodie
    }
  });

  console.log("latestEntries", latestFriendsEntries);

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
          activity: inviteActivity ? inviteActivity : null,
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

  //Effects
  //OUTBOX REACTIONS

  const handleOutboxReaction = (emoji) => {
    setSendGift((prevInput) => [...prevInput, emoji]);
  };

  return (
    <Grid>
      {session && (
        <>
          <FriendsFilterTile
            handleOnTyping={handleOnTyping}
            userName={userName}
          />
          <FriendsListTile
            moodies={moodies}
            isLoadingEntries={isLoadingEntries}
          />
          <InboxTile
            showSentence={showSentence}
            friendsEntry={friendsEntry}
            showFriendMessages={showFriendMessages}
            allCommunity={allCommunity}
            isLoadingAllCommunity={isLoadingAllCommunity}
            setShowFriendMessages={setShowFriendMessages}
            handleGetUsername={handleGetUsername}
            entriesWithUserIdGifts={entriesWithUserIdGifts}
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
            friendsEntry={friendsEntry}
            searchValue={searchValue}
            latestFriendsEntries={latestFriendsEntries}
            isLoadingAllUsers={isLoadingAllUsers}
            showSentence={showSentence}
            showFriendMessages={showFriendMessages}
            setShowFriendMessages={setShowFriendMessages}
            handleOutboxReaction={handleOutboxReaction}
            sendGift={sendGift}
            setSendGift={setSendGift}
          />
        </>
      )}
      {!session && (
        <>
          <p>This feature is only for logged in users. Please log in!</p>
          <button
            onClick={() => {
              signIn();
            }}
          >
            Sign In!
          </button>
        </>
      )}
    </Grid>
  );
}
