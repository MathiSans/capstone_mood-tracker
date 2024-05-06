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
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
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

export const EntryContainer = styled.div`
  position: relative;
  width: 160px;
  height: 200px;
`;

export const EntryTileContainer = styled.div`
  height: 160px;
  width: 160px;
`;

export const ReactionsContainer = styled.div`
  height: 34px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-small);
  background-color: ${(props) =>
    props.$color ? props.$color : "var(--color-main)"};
  border-radius: 16px;
  margin-top: 6px;
`;

export const CrossIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
`;
