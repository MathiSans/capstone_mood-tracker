import styled from "styled-components";

export default function MuteButton({ isMuted, setIsMuted, setCurrentVolume }) {
  function toggleMute() {
    const toggle = isMuted ? 0.3 : 0;
    setCurrentVolume(toggle);
    setIsMuted(!isMuted);
  }

  return (
    <StyledMuteButton type="button" onClick={toggleMute}>
      <StyledText>{isMuted ? "Unmute" : "Mute"}</StyledText>
    </StyledMuteButton>
  );
}

const StyledMuteButton = styled.button`
  padding: 10px 26px;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  cursor: pointer;
`;

const StyledText = styled.p`
  color: white;
  font-size: 0.5;
  margin: 0;
`;
