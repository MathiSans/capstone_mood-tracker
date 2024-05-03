import * as Styled from "./FriendsFilterTile.styled";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FriendsFilterTile({ nonFriends, handleAddFriend }) {
  const [clicked, setClicked] = useState();

  useEffect(() => {
    setClicked();
  }, [nonFriends]);

  const handleClick = (id) => {
    handleAddFriend(id);
    setClicked(id);
  };
  return (
    <Styled.Container>
      find your friends. click on a user to add them to your friends list.
      <Styled.FriendsListContainer>
        <Styled.FriendsList>
          {nonFriends.map((user, index) => {
            return (
              <Styled.Friend
                key={index}
                onClick={() => handleClick(user._id)}
                style={{ opacity: clicked === user._id ? 0.3 : 1 }}
              >
                <p>{user.name}</p>
                <Image
                  style={{ borderRadius: "50%" }}
                  height={36}
                  width={36}
                  src={user.image}
                  alt={user.name}
                />
              </Styled.Friend>
            );
          })}
        </Styled.FriendsList>
      </Styled.FriendsListContainer>
    </Styled.Container>
  );
}
