import * as Styled from "./FriendsFilterTile.styled";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function FriendsFilterTile({
  handleOnTyping,
  userName,
  inputRef,
  isFriendsSearch,
  setIsFriendsSearch,
  friendsSearchValue,
  getUserName,
  handleAddFriend,
}) {
  const { data: session } = useSession();

  return (
    <Styled.Container id="friends-search">
      {" "}
      <h1>Community-Area</h1>
      <h3>share with your friends</h3>
      <p>Welcome {session ? userName : "Unknown User"}</p>
      <p>Your id: {session && session.user.id}</p>
      <br />
      <h4>
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
      </ToggleButton>
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
