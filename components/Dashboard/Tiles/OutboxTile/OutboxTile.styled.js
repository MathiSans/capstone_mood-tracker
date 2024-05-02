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
  grid-row-end: span 3;
`;

export const EntriesListContainer = styled.div`
  overflow-x: auto;
`;

export const EntriesList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Emojis = styled.div`
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;

export const AddEmojisSentence = styled.p`
  /* margin-top: var(--spacing-m);
  margin-left: var(--spacing-s); */
`;

export const EmojiContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const addButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  font-size: 2rem;
  color: var(--color-main-alt);
  background-color: transparent;
  margin-left: -12px;
`;

export const DeleteButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: var(--border-radius-round);
  margin-top: var(--spacing-xs);
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  color: var(--color-main-alt);
`;
