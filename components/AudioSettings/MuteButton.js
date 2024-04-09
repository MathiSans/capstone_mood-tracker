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
      </StyledMuteButton>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: end;
  align-items: end;
  bottom: 0;
  right: 0;
`;

const StyledMuteButton = styled.button`
  background-color: transparent;
  color: ${(props) =>
    props.$isMuted ? `var(--color-neutral)` : `var(--color-main-alt)`};
  border: 1px solid
    ${(props) =>
      props.$isMuted ? `var(--color-neutral)` : `var(--color-main-alt)`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-round);
  margin-inline-end: 5rem;
  margin-block-end: 1.5rem;
  font-size: 1.2rem;
  height: 40px;
  width: 40px;
`;
