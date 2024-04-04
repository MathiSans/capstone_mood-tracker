import styled from "styled-components";
import { IoVolumeHighSharp } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";

export default function MuteButton({
  isMuted,
  setIsMuted,
  currentVolume,
  audioReference,
}) {
  function toggleMute() {
    setIsMuted(!isMuted);
    const audio = audioReference.current;
    const volume = currentVolume;

    if (!isMuted) {
      audio.pause();
    } else {
      volume;
    }
  }

  return (
    <StyledContainer>
      <StyledMuteButton type="button" onClick={toggleMute} $isMuted={isMuted}>
        {isMuted ? <IoVolumeMute /> : <IoVolumeHighSharp />}
        {/* <StyledText>{!isMuted ? "🔊" : "🔈"}</StyledText> */}
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
  right: 0;
`;

const StyledMuteButton = styled.button`
  /* background-color: ${(props) => (props.$isMuted ? "grey" : "white")}; */
  background-color: transparent;
  color: ${(props) => (props.$isMuted ? "grey" : "white")};
  border: 1px solid ${(props) => (props.$isMuted ? "grey" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-inline-end: 1.5rem;
  font-size: 1.2rem;
  height: 42px;
  width: 42px;
  filter: drop-shadow(black 0rem 0rem 25px);
  cursor: pointer;
  /* box-shadow: ${(props) =>
    props.$isMuted ? "inset 0px 0px 0px 2px red" : "none"}; */
  /* padding: 0.85rem 1rem; */
`;

const StyledText = styled.p`
  color: white;
  font-size: 0.5;
  margin: 0;
`;
