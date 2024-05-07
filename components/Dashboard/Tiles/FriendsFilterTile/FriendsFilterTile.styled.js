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
  overflow-y: auto;
  margin-top: 28px;
  flex: 1;
`;

export const FriendsList = styled.div`
  column-count: 4;
  column-gap: 10px;
`;

export const Friend = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
  font-size: var(--font-size-small);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 0.5rem;
  padding: 10px;
  border-radius: var(--border-radius-small);
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: ${(props) =>
    props.$isFriend ? "0px 0px 0px 1.5px green inset" : "none"};
  cursor: pointer;
`;
