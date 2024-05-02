import * as Styled from "./FriendsFilterTile.styled";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function FriendsFilterTile({ nonFriends, handleAddFriend }) {
  return (
    <Styled.Container>
      find your friends. click on a user to add them to your friends list.
      <Styled.FriendsListContainer>
        <Styled.FriendsList>
          {nonFriends.map((user, index) => {
            return (
              <Styled.Friend
                key={index}
                onClick={() => handleAddFriend(user._id)}
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
