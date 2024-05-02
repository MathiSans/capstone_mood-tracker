import { Grid } from "../Dashboard.styled";
import InboxTile from "../Tiles/InboxTile/InboxTile";
import OutboxTile from "@/components/Dashboard/Tiles/OutboxTile/OutboxTile";
import FriendsListTile from "@/components/Dashboard/Tiles/FriendsListTile/FriendsListTile";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import { mutate } from "swr";
import useSWR from "swr";
import FriendsFilterTile from "../Tiles/FriendsFilterTile/FriendsFilterTile";

export default function CommunityColumn() {
  const { data: session } = useSession();
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { allUsers, isLoadingAllUsers, errorAllUsers } =
    useData().fetchedAllUsers;
  const { allMessages, isLoadingAllMessages, errorAllMessages } =
    useData().fetchedAllMessages;

  const { data: userData } = useSWR(`/api/user/${session.user.id}`);

  const nonFriends = allUsers.filter(
    (user) =>
      !userData?.friends.includes(user._id) && user._id !== session.user.id
  );

  const friends = allUsers.filter(
    (user) =>
      userData?.friends.includes(user._id) && user._id !== session.user.id
  );

  const friendsIds = friends.map((friend) => friend._id);

  let latestEntriesFromFriends = [];
  let foundFriends = new Set();

  // Sort allEntries from highest to lowest index
  const sortedAllEntries = [...allEntries].reverse();

  while (foundFriends.size < friendsIds.length) {
    for (let entry of sortedAllEntries) {
      if (friendsIds.includes(entry.user) && !foundFriends.has(entry.user)) {
        latestEntriesFromFriends.push(entry);
        foundFriends.add(entry.user);
        break; // Break the for loop and start again
      }
    }
  }

  function handleAddFriend(friendId) {
    async function updateUser(friendId) {
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
    updateUser(friendId);
  }

  function handleDeleteFriend(friendId) {
    async function updateUser(friendId) {
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
    updateUser(friendId);
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
    console.log("message", message);
    console.log("messageId", messageId);
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
        console.log("PUT");
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
        console.log("POST");
        mutate(`/api/message/`);
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <Grid>
      {session && (
        <>
          {!isLoadingAllUsers && (
            <FriendsFilterTile
              nonFriends={nonFriends}
              handleAddFriend={handleAddFriend}
            />
          )}
          <FriendsListTile
            friends={friends}
            handleDeleteFriend={handleDeleteFriend}
          />
          {/*  <InboxTile />*/}
          {!isLoadingEntries && !isLoadingAllMessages && (
            <OutboxTile
              allMessages={allMessages}
              handleAddMessage={handleAddMessage}
              handleDeleteMessage={handleDeleteMessage}
              latestEntriesFromFriends={latestEntriesFromFriends}
              allUsers={allUsers}
            />
          )}
        </>
      )}
    </Grid>
  );
}
