import * as Styled from "./FriendsFilterTile.styled";
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
      list of all users (click on a user to add as a friend)
      <Styled.FriendsListContainer>
        <Styled.FriendsList>
          {nonFriends.map((user, index) => {
            return (
              <Styled.Friend
                key={index}
                onClick={() => handleClick(user._id)}
                style={{
                  opacity: clicked === user._id ? 0.3 : 1,
                }}
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
