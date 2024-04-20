import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

export const Grid = styled.div`
  padding: 114px 0 114px 0;
  display: grid;
  grid-template-columns: 80px 80px 80px 80px;
  grid-gap: 1rem;
  grid-auto-rows: 80px;
  overflow-y: scroll;
`;
