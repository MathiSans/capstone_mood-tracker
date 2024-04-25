import { useData } from "@/lib/useData";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { mutate } from "swr";

export function Community() {
  const { data: session } = useSession();
  const [searchValue, setSearchValue] = useState("");
  const [hug, setHug] = useState("");
  const [flowers, setFlowers] = useState("");
  const [inviteActivity, setInviteActivity] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [send, setSend] = useState("");
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const { allUsers, isLoadingAllUsers, errorAllUsers } =
    useData().fetchedAllUsers;
  const { activities, isLoadingActivities, errorActivities } =
    useData().fetchedActivities;
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

    const reversedEntries = allEntries && allEntries.slice().reverse(); // Create a copy and reverse it
    console.log("reversedEntries", reversedEntries);

    const latestFriendEntry =
      getUserName && reversedEntries
        ? reversedEntries.find(
            (friendEntry) => friendEntry.user === getUserName._id
          )
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
  console.log(getUserName);
  const currentLocalUserDate = new Date();
  console.log("currentLocalUserDate", typeof currentLocalUserDate);
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
  console.log("inviteActivity", inviteActivity);
  return (
    <>
      <h1>Community-Area</h1>
      <h3>share with your friends</h3>

      <p>Welcome {session ? userName : "Unknown User"}</p>
      <p>Your id: {session && session.user.id}</p>
      <br />
      <h4>Search for Your Friends</h4>
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
        <br />
        <section>
          <p>
            Your friend{" "}
            <b style={{ color: "lightblue" }}>{getUserName?.name}</b> felt on{" "}
            <b style={{ color: "lightblue" }}>{friendsEntry.time}</b>
            {"  "}
            <b style={{ color: friendsEntry.color }}>
              {friendsEntry.experience}
            </b>
          </p>
        </section>
        <br />
        <hr />
      </div>
      <br />
      <br />
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
            setSend("💐");
          }}
        >
          Send Hugs 🤗
        </button>
        <b>
          {"       "}to{" "}
          <span style={{ color: "yellow" }}>{getUserName.name}</span>
        </b>
        <br />
        <br />

        <b>
          {"       "}Invite{" "}
          <span style={{ color: "yellow" }}>{getUserName.name}</span> to{" "}
          <select
            required
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
      <br />
      <br />
      <br />
      {submissionStatus === "success" && (
        <p style={{ color: "green" }}>Submission successful!</p>
      )}
    </>
  );
}
