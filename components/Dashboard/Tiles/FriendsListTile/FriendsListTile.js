import * as Styled from "./FriendsListTile.styled";

export default function FriendsListTile({
  getUserName,
  friendsEntry,
  searchValue,
}) {
  console.log(
    "getUserName List",
    getUserName,
    "friendsEntry List",
    friendsEntry
  );
  return (
    <Styled.Container>
      <section>
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
      </section>
    </Styled.Container>
  );
}
