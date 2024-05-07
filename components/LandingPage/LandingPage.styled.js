import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const InfoBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  border-radius: var(--border-radius-small);
  padding: 1rem;
  width: 300px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Title = styled.p`
  font-size: 80px;
  font-weight: 100;
  align-self: center;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const InfoIcon = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  background: none;
  border: none;
  color: var(--color-light);
  font-size: 1.4rem;
  cursor: pointer;
`;

export const InfoText = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`;

export const CloseIcon = styled.button`
  margin-top: 1.5rem;
  background: none;
  border: none;
  color: var(--color-light);
  font-size: 1.4rem;
  cursor: pointer;
`;
