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
      <StyledMuteButton type="button" onClick={toggleMute} isMuted={isMuted}>
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
  background-color: white;
  border: transparent;
  box-shadow: ${({ isMuted }) =>
    isMuted ? "inset 0px 0px 0px 2px red" : "none"};
  border-radius: 50%;
  padding: 0.85rem 1rem;
  margin-inline-end: 1.5rem;
  font-size: 1rem;
  filter: drop-shadow(black 0rem 0rem 25px);
  cursor: pointer;
`;

const StyledText = styled.p`
  color: white;
  font-size: 0.5;
  margin: 0;
`;
