import * as Styled from "./FriendsFilterTile.styled";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function FriendsFilterTile({
  userName,
  handleAddFriend,
  allUsers,
  isLoadingAllUsers,
}) {
  const { data: session } = useSession();
  console.log("session user friends", session.user);
  function handleForceRender() {
    console.log("rerender");
  }
  return (
    <Styled.Container id="friends-search">
      {" "}
      <h1>Community-Area</h1>
      <h3>share with your friends</h3>
      <p>Welcome {session ? userName : "Unknown User"}</p>
      <p>Your id: {session && session.user.id}</p>
      <br />
      <ScrollContainer>
        <SuggestedFriends>
          {!isLoadingAllUsers &&
            allUsers.map(({ name, _id, image }) => {
              return (
                <SuggestedFriendsCard
                  key={_id}
                  onClick={() => {
                    handleAddFriend(session.user.id, _id);
                    handleForceRender();
                  }}
                >
                  <Image
                    width={35}
                    height={35}
                    src={image}
                    alt={`image of ${name}`}
                  />
                  <p>{name}</p>
                </SuggestedFriendsCard>
              );
            })}
        </SuggestedFriends>
      </ScrollContainer>
      {/* <h4>
        {isFriendsSearch
          ? "Search for Your Friends"
          : "Who you want to make gift"}
      </h4>
      <input
        type="search"
        ref={inputRef}
        onChange={(event) => {
          handleOnTyping(event);
        }}
      ></input>
      <span> {getUserName ? getUserName.name : "no username"}</span>
      <button
        onClick={() => {
          handleAddFriend();
        }}
      >
        add
      </button>
      <ToggleButton
        isFriendsSearch={isFriendsSearch}
        onClick={() => {
          setIsFriendsSearch(!isFriendsSearch);
        }}
      >
        {isFriendsSearch ? "give Gift" : "search for Friends"}
      </ToggleButton> */}
    </Styled.Container>
  );
}

const Search = styled.div``;
const ToggleButton = styled.button`
  width: 150px;
  background-color: ${(props) => (props.isFriendsSearch ? "black" : "white")};
  border-radius: 25%;
  color: ${(props) => (props.isFriendsSearch ? "white" : "black")};
`;
const ScrollContainer = styled.div`
  overflow: hidden;
`;
const SuggestedFriends = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

const SuggestedFriendsCard = styled.div`
  padding: 0.7rem;
  cursor: pointer;
  position: relative;
`;
