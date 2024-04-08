import styled from "styled-components";

export const Grid = styled.div`
  position: ${(props) => (props.isEntriesListStyle ? "relative" : "absolute")};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${(props) =>
    props.isEntriesListStyle
      ? "var(--color-main)"
      : "var(--effect-radial-gradient)"};
`;
