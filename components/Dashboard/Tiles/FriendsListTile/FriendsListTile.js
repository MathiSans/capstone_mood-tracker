import * as Styled from "./FriendsListTile.styled";

export default function FriendsListTile({
  getUserName,
  friendsEntry,
  searchValue,
  latestFriendsEntries,
  handleGetUsername,
  isLoadingAllUsers,
}) {
  console.log(
    "getUserName List",
    getUserName,
    "friendsEntry List",
    friendsEntry
  );
  return (
    <Styled.Container>
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
      <div>
        {latestFriendsEntries.map(
          ({ experience, reactions, _id, time, user }) => {
            return (
              <p key={_id}>
                {!isLoadingAllUsers && handleGetUsername(user)} felt on{" "}
                <b>{time}</b> <b>{experience}.</b>
                {"  "} Reaction:
                <b>{reactions}</b>
              </p>
            );
          }
        )}
      </div>
    </Styled.Container>
  );
}
