import styled from "styled-components";

export const Container = styled.div`
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-end: span 4;
  grid-row-end: span 2;
`;

export const FriendsListContainer = styled.div`
  overflow-x: auto;
`;

export const FriendsList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Friend = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;
