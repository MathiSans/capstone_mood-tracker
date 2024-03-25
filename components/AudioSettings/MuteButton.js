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
      if (!isMuted) {
        audio.pause();
        audio.volume = 0;
        console.log("mute:", audio.volume);
      } else {
        audio.play();
        audio.volume = 0.3;
        console.log("unmute:", audio.volume);
      }
    }
  }
  return (
    <StyledContainer>
      <StyledMuteButton type="button" onClick={toggleMute}>
        <StyledText>{isMuted ? "🔈" : "🔊"}</StyledText>
      </StyledMuteButton>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: fixed;
  justify-content: end;
  align-items: end;
  padding-bottom: 28px;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 60px;
`;

const StyledMuteButton = styled.button`
  padding: 0.5rem 0.7rem;
  margin-inline-end: 1.5rem;
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
