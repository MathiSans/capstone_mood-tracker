import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100dvh;
`;

export const MenuContainer = styled.div`
  position: relative;
  z-index: 9999;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xxxl);
  margin-bottom: 10vh;
`;

export const Navigation = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: var(--spacing-l);
`;
