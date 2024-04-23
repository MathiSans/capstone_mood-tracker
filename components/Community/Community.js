import { useData } from "@/lib/useData";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function Community() {
  const { data: session } = useSession();
  const [searchValue, setSearchValue] = useState("");
  const [send, setSend] = useState("");
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const { allUsers, isLoadingAllUsers, errorAllUsers } =
    useData().fetchedAllUsers;
  console.log("allUsers", allUsers);
  const userName = session && session.user.name;
  function handleOnTyping(event) {
    setSearchValue(event.target.value);
  }

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
    console.log("allEntries", allEntries);

    const latestFriendEntry =
      getUserName && allEntries
        ? allEntries.find((friendEntry) => friendEntry.user === getUserName._id)
        : "No Data";
    return latestFriendEntry;
  }

  //   const latestFriendsEntry =
  //     !isLoadingEntries && !errorEntries && session
  //       ? allEntries.find((friendEntry) => friendEntry._id === getUserName._id)
  //       : null; // Use null instead of "No Data" to signify absence of data
  console.log("W", getUserName);
  const friendsEntry = getUserName && allUsers && getLatestEmotion();
  console.log(friendsEntry, "friendsEntry");

  return (
    <>
      <h1>Community-Area</h1>
      <h3>share with your friends</h3>

      <p>hi {userName}</p>
      <p>id: {session && session.user.id}</p>
      <br />
      <h4>Your Friends</h4>
      <input
        type="search"
        onChange={(event) => {
          handleOnTyping(event);
        }}
      ></input>

      <div>
        <br />
        <br />
        <hr />
        <section>
          <p>
            Your friend {getUserName?.name} felt on {friendsEntry.time}
            {"  "}
            {friendsEntry.experience}
          </p>
        </section>
      </div>
      <br />
      <br />
      <button onClick={() => setSend("💐")}>Send Flowers 💐</button>
      <button onClick={() => setSend("🤗")}>Send Hugs 🤗</button>
      <button onClick={() => setSend("🌅")}>Invite to an Activity</button>
      <h1>{send}</h1>
    </>
  );
}