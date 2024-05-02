import * as Styled from "./FriendsListTile.styled";
import Image from "next/image";
import { useState } from "react";

export default function FriendsListTile({ friends, handleDeleteFriend }) {
  return (
    <Styled.Container>
      these are your friends. see their latest entries down below.
      <Styled.FriendsListContainer>
        <Styled.FriendsList>
          {friends.map((user, index) => {
            return (
              <Styled.Friend
                key={index}
                onClick={() => handleDeleteFriend(user._id)}
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
