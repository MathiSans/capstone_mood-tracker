import { Grid } from "../Dashboard.styled";
import InboxTile from "../Tiles/InboxTile/InboxTile";
import OutboxTile from "@/components/Dashboard/Tiles/OutboxTile/OutboxTile";
import FriendsListTile from "@/components/Dashboard/Tiles/FriendsListTile/FriendsListTile";
import { Suspense, useState } from "react";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import { mutate } from "swr";
import useSWR from "swr";
import FriendsFilterTile from "../Tiles/FriendsFilterTile/FriendsFilterTile";
import { signIn } from "next-auth/react";
import { useRef, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

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
  const { data: userData } = useSWR(`/api/user/${userId}`);

  const [friendsSearchValue, setFriendsSearchValue] = useState("");
  const [isFriendsSearch, setIsFriendsSearch] = useState(true);
  const [listUpdate, setListUpdate] = useState(false);

  //Database
  //Entries & Activites
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;

  const { activities, isLoadingActivities, errorActivities } =
    useData().fetchedActivities;

  const userName = session && session.user.name;
  const [friendsList, setFriendsList] = useLocalStorageState([]);

  function handleOnTyping(event) {
    if (isFriendsSearch) {
      setSearchValue(event.target.value);
    } else {
      setFriendsSearchValue(event.target.value);
    }
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

  const entriesWithUserIdGifts =
    !isLoadingEntries &&
    userEntries &&
    session &&
    userEntries.filter((item) =>
      giftEntriesIds.some((giftEntry) => giftEntry._id === item.id)
    );

  const handleGetGiftedUserEntries = (entryId) => {};

  // const latestFriendsEntries = friendsList.map((moodie) => {
  //   const filteredEntries = allEntries.filter(
  //     (entry) => entry.user === moodie._id
  //   );
  //   if (filteredEntries.length > 0) {
  //     const latestEntry = filteredEntries.sort((a, b) => {
  //       return new Date(b.time) - new Date(a.time);
  //     })[0];
  //     return latestEntry;
  //   } else {
  //     return null; // If no entry is found for the moodie
  //   }
  // });
  const latestFriendsEntries = friendsList
    ? friendsList.map((moodie) => {
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
      })
    : [];

  //Design
  function handleShowSentence() {
    setShowSentence(!showSentence);
  }
  const friendsEntry = getUserName && allUsers && getLatestEmotion();

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
          emoji: sendGift,
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
  const handleFriendsAddClick = (id) => {
    const element = document.getElementById("friends-search");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInput = () => {
    // Check if the input ref is available
    if (inputRef.current) {
      // Focus the input field
      inputRef.current.focus();
    }
  };
  async function handleAddFriend(userId, friendId) {
    setListUpdate(!listUpdate);
    const response = await fetch(`/api/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        friends: [...userData.friends, friendId],
      }),
    });

    if (!response.ok) {
      // Handle error
      throw new Error("Failed to add friend");
    }
    mutate("/api/user");
    console.log("user data friends", userData.friends);
  }

  useEffect(() => {
    const handleGetFriendsList = () => {
      if (isLoadingAllUsers || !userData) {
        return; // Return early if loading or userData is not available
      }

      const filteredFriendsList = allUsers.filter((friend) => {
        return userData.friends.includes(friend._id);
      });
      setFriendsList(filteredFriendsList); // Update friendsList state
    };
    handleGetFriendsList();
  }, [listUpdate, userData, isLoadingAllUsers, allUsers]);

  //for the searchBar Later for searching Names
  // const friendsList = handleGetFriendsList();

  // !isLoadingAllUsers &&
  // allUsers.filter((friend) => {
  //   return names.some((name) =>
  //     friend.name.toLowerCase().includes(name.toLowerCase())
  //   );
  // });
  return (
    <Grid>
      {session && (
        <>
          {" "}
          <FriendsFilterTile
            handleOnTyping={handleOnTyping}
            userName={userName}
            inputRef={inputRef}
            isFriendsSearch={isFriendsSearch}
            setIsFriendsSearch={setIsFriendsSearch}
            friendsSearchValue={friendsSearchValue}
            getUserName={getUserName}
            handleAddFriend={handleAddFriend}
            allUsers={allUsers}
            isLoadingAllUsers={isLoadingAllUsers}
          />
          <FriendsListTile
            isLoadingEntries={isLoadingEntries}
            setSearchValue={setSearchValue}
            handleFriendsAddClick={handleFriendsAddClick}
            focusInput={focusInput}
            userData={userData}
            friendsList={friendsList}
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
            setSearchValue={setSearchValue}
            submissionStatus={submissionStatus}
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
