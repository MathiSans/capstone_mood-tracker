import * as Styled from "./FriendsListTile.styled";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FriendsListTile({ friends, handleDeleteFriend }) {
  const [clicked, setClicked] = useState();

  useEffect(() => {
    setClicked();
  }, [friends]);

  const handleClick = (id) => {
    handleDeleteFriend(id);
    setClicked(id);
  };
  return (
    <Styled.Container>
      these are your friends (click on a user to remove them)
      <Styled.FriendsListContainer>
        <Styled.FriendsList>
          {friends.map((user, index) => {
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
