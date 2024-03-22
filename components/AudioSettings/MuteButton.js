import styled from "styled-components";

export default function MuteButton({
  isMuted,
  setIsMuted,
  setCurrentVolume,
  audioReference,
}) {
  function toggleMute() {
    setIsMuted(!isMuted);
    const audio = audioReference.current;
    if (audio) {
      if (isMuted) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
  return (
    <StyledMuteButton type="button" onClick={toggleMute}>
      <StyledText>{isMuted ? "🔈" : "🔊"}</StyledText>
    </StyledMuteButton>
  );
}

const StyledMuteButton = styled.button`
  padding: 0.5rem 0.7rem;
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
