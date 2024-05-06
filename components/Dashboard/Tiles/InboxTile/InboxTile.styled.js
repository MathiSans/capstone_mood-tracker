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
  overflow-x: scroll;
`;

export const MessagesListContainer = styled.div`
  overflow-x: auto;
`;

export const MessagesList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const MessageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 6px;
  border-radius: var(--border-radius-small);
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: var(--font-size-small);
  position: relative;
`;

export const Emojis = styled.div`
  font-size: 1.6rem;
`;

export const ColorCircle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  width: 60%;
  height: 60%;
  border-radius: var(--border-radius-round);
  background-color: ${(prop) => prop.color};
  filter: blur(5px);
  opacity: 0.4;
`;

export const InfoText = styled.div`
  font-size: var(--font-size-small);
  width: 80px;
`;
