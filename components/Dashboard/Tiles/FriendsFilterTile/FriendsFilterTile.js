import * as Styled from "./FriendsFilterTile.styled";
import {
  Tile,
  PillText,
  Pill,
  InfoTextTopRight,
  Header,
} from "../Tiles.styled";
import Image from "next/image";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FriendsFilterTile({
  allUsers,
  friends,
  handleAddFriend,
  handleDeleteFriend,
}) {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = (id) => {
    const isFriend = friends.some((friend) => friend._id === id);

    if (isFriend) {
      handleDeleteFriend(id);
    } else {
      handleAddFriend(id);
    }
  };

  function handleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <Tile $columns="4" $rows={collapsed ? "1" : "3"}>
      <Header>
        <Pill>
          <PillText>Friends Finder</PillText>
        </Pill>
        <InfoTextTopRight>
          Click on a user to add them to your friends list
        </InfoTextTopRight>
        <motion.div
          onClick={() => handleCollapse()}
          style={{ cursor: "pointer" }}
          animate={{ rotate: collapsed ? "0deg" : "180deg" }}
        >
          <MdOutlineExpandMore />
        </motion.div>
      </Header>
      {!collapsed && (
        <Styled.FriendsListContainer>
          <Styled.FriendsList>
            {allUsers.map((user, index) => {
              const isFriend = friends.some(
                (friend) => friend._id === user._id
              );
              return (
                <Styled.Friend
                  key={index}
                  $isFriend={isFriend}
                  onClick={() => handleClick(user._id)}
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
      )}
    </Tile>
  );
}
