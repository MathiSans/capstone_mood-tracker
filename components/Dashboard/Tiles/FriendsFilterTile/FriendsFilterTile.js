import * as Styled from "./FriendsFilterTile.styled";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function FriendsFilterTile({ handleOnTyping, userName }) {
  const { data: session } = useSession();

  return (
    <Styled.Container>
      {" "}
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
    </Styled.Container>
  );
}

const Search = styled.div``;
