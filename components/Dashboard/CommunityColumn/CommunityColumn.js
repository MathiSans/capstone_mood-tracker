import { Grid } from "../Dashboard.styled";
import * as Styled from "./CommunityColumn.styled";
import InboxTile from "../Tiles/InboxTile/InboxTile";
import OutboxTile from "@/components/Dashboard/Tiles/OutboxTile/OutboxTile";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import { mutate } from "swr";
import useSWR from "swr";
import FriendsFilterTile from "../Tiles/FriendsFilterTile/FriendsFilterTile";
import { useState } from "react";

export default function CommunityColumn() {
  const [communityFeaturesAccepted, setCommunityFeaturesAccepted] =
    useState(false);
  const { data: session } = useSession();
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { allUsers, isLoadingAllUsers, errorAllUsers } =
    useData().fetchedAllUsers;
  const { allMessages, isLoadingAllMessages, errorAllMessages } =
    useData().fetchedAllMessages;

  const { data: userData } = useSWR(`/api/user/${session.user.id}`);

  const usersThatAcceptedCommunityFeatures = allUsers.filter(
    (user) => user.communityFeatures === true
  );

  const allUsersWithoutCurrentUser = usersThatAcceptedCommunityFeatures.filter(
    (user) => user._id !== session.user.id
  );

  const nonFriends = usersThatAcceptedCommunityFeatures.filter(
    (user) =>
      !userData?.friends.includes(user._id) && user._id !== session.user.id
  );

  const friends = usersThatAcceptedCommunityFeatures.filter(
    (user) =>
      userData?.friends.includes(user._id) && user._id !== session.user.id
  );

  const friendsIds = friends.map((friend) => friend._id);

  // Sort allEntries from highest to lowest index
  const sortedAllEntries = [...allEntries].reverse();

  // Convert friendsIds array to a set for O(1) lookup
  const friendsIdsSet = new Set(friendsIds);

  // Initialize a map to store the queues for each friend
  const friendsQueues = new Map();

  // Iterate over the sorted entries
  for (let [index, entry] of sortedAllEntries.entries()) {
    // Attach the position number to the entry
    entry.position = index;
    // If the entry's user is a friend
    if (friendsIdsSet.has(entry.user)) {
      // If we haven't stored any entries for them yet, initialize a queue
      if (!friendsQueues.has(entry.user)) {
        friendsQueues.set(entry.user, []);
      }
      // If we have stored less than 3 entries for them
      if (friendsQueues.get(entry.user).length < 3) {
        // Enqueue the entry
        friendsQueues.get(entry.user).push(entry);
      }
    }
  }

  // Flatten the entries queues to a single array
  let latestEntriesFromFriends = [];
  for (let i = 0; i < 3; i++) {
    for (let queue of friendsQueues.values()) {
      if (queue[i]) {
        latestEntriesFromFriends.push(queue[i]);
      }
    }
  }

  // Sort latestEntriesFromFriends based on the position numbers
  latestEntriesFromFriends.sort((a, b) => a.position - b.position);

  async function handleAddFriend(friendId) {
    const response = await fetch(`/api/user/${session.user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        friends: [...userData.friends, friendId],
      }),
    });

    if (response.ok) {
      mutate(`/api/user/${session.user.id}`);
      return true;
    } else if (!response.ok) {
      return false;
    }
  }

  async function handleDeleteFriend(friendId) {
    const response = await fetch(`/api/user/${session.user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        friends: userData.friends.filter((friend) => friend !== friendId),
      }),
    });

    if (response.ok) {
      mutate(`/api/user/${session.user.id}`);
      return true;
    } else if (!response.ok) {
      return false;
    }
  }

  async function handleDeleteMessage(entryId, index) {
    const responseAll = await fetch(`/api/message/`);
    const allMessages = await responseAll.json();
    const message = allMessages.find(
      (message) => message.entryId.toString() === entryId
    );

    if (message) {
      // Remove the emoji at the specified index
      message.message.splice(index, 1);

      // If the array is empty after removing the emoji, delete the entire message
      if (message.message.length === 0) {
        const response = await fetch(`/api/message/${message._id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          mutate(`/api/message/`);
          return true;
        } else {
          return false;
        }
      } else {
        // If the array is not empty, update the message
        const response = await fetch(`/api/message/${message._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        });

        if (response.ok) {
          mutate(`/api/message/`);
          return true;
        } else {
          return false;
        }
      }
    }
  }

  async function handleAddMessage(friendId, entryId, message) {
    const response = await fetch(`/api/message/`);
    const allMessages = await response.json();
    const messageId = allMessages.find(
      (message) => message.entryId.toString() === entryId
    )?._id;
    let existingMessage = null;

    if (messageId) {
      const response = await fetch(`/api/message/${messageId}`);
      if (response.ok) {
        existingMessage = await response.json();
      }
    }

    if (existingMessage) {
      const response = await fetch(`/api/message/${messageId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: [...existingMessage.message, message],
        }),
      });

      if (response.ok) {
        mutate(`/api/message/`);
        return true;
      } else {
        return false;
      }
    } else {
      const response = await fetch(`/api/message/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId: session.user.id,
          recipientId: friendId,
          entryId: entryId,
          message: [message],
        }),
      });
      if (response.ok) {
        mutate(`/api/message/`);
        return true;
      } else {
        return false;
      }
    }
  }

  async function handleAcceptCommunityFeatures() {
    setCommunityFeaturesAccepted(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch(`/api/user/${session.user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        communityFeatures: true,
      }),
    });

    if (response.ok) {
      mutate(`/api/user/${session.user.id}`);

      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {userData?.communityFeatures ? (
        <Grid>
          <>
            {!isLoadingAllUsers && (
              <FriendsFilterTile
                allUsers={allUsersWithoutCurrentUser}
                friends={friends}
                handleAddFriend={handleAddFriend}
                handleDeleteFriend={handleDeleteFriend}
              />
            )}
            {!isLoadingAllUsers &&
              !isLoadingAllMessages &&
              !isLoadingEntries && (
                <InboxTile
                  allEntries={allEntries}
                  session={session}
                  allUsers={usersThatAcceptedCommunityFeatures}
                  allMessages={allMessages}
                />
              )}
            {!isLoadingEntries &&
              !isLoadingAllMessages &&
              !isLoadingAllUsers &&
              friends.length > 0 && (
                <OutboxTile
                  allMessages={allMessages}
                  handleAddMessage={handleAddMessage}
                  handleDeleteMessage={handleDeleteMessage}
                  latestEntriesFromFriends={latestEntriesFromFriends}
                  allUsers={usersThatAcceptedCommunityFeatures}
                />
              )}
          </>
        </Grid>
      ) : (
        <Styled.SwitchContainer>
          Enable community features to see your friends' latest entries and
          reactions. Your latest entries will be visable for other users who
          also accepted these terms.
          <Styled.Switch
            onClick={() => {
              handleAcceptCommunityFeatures();
            }}
          >
            <Styled.Option $isActive={!communityFeaturesAccepted}>
              <Styled.TileH4>off</Styled.TileH4>
            </Styled.Option>
            <Styled.Option $isActive={communityFeaturesAccepted}>
              <Styled.TileH4>on</Styled.TileH4>
            </Styled.Option>
          </Styled.Switch>
        </Styled.SwitchContainer>
      )}
    </>
  );
}
