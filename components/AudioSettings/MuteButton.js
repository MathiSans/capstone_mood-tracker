import styled from "styled-components";
import { IoVolumeHighSharp } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

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
    <AnimationWrapper delay>
      <StyledContainer>
        <StyledMuteButton type="button" onClick={toggleMute} $isMuted={isMuted}>
          {isMuted ? <IoVolumeMute /> : <IoVolumeHighSharp />}
        </StyledMuteButton>
      </StyledContainer>
    </AnimationWrapper>
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
  background-color: transparent;
  color: ${(props) => (props.$isMuted ? "grey" : "white")};
  border: 1px solid ${(props) => (props.$isMuted ? "grey" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  height: 42px;
  width: 42px;
  filter: drop-shadow(black 0rem 0rem 25px);
  cursor: pointer;
`;
