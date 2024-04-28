import * as Styled from "./FriendsListTile.styled";
import Image from "next/image";
import styled from "styled-components";

export default function FriendsListTile({
  moodies,
  isLoadingAllUsers,
  isLoadingEntries,
}) {
  console.log("moodies Friednslisttile", moodies);
  return (
    <FriendListContainer>
      <h2>Friends List</h2>
      <p>The Moodies</p>
      <FriendsContainers>
        {!isLoadingEntries &&
          moodies &&
          moodies.map(({ _id, image, name }) => {
            return (
              <FriendsCard key={_id}>
                <Image
                  width={35}
                  height={35}
                  src={image}
                  alt={`image of ${name}`}
                />
                <p>{name}</p>
              </FriendsCard>
            );
          })}
      </FriendsContainers>
    </FriendListContainer>
  );
}

const FriendsCard = styled.div`
  padding: 0.7rem;
`;
export const FriendListContainer = styled.div`
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  grid-column-end: span 4;
  grid-row-end: span 3;
`;
export const FriendsContainers = styled.div`
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  grid-column-end: span 4;
  grid-row-end: span 4;
  margin-top: 1rem;
`;
