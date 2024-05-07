import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100dvh;
  z-index: 2;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xxl);
  /* margin-bottom: 10vh; */
`;

export const Navigation = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: var(--spacing-l);
  margin-top: 10vh;
`;
