import styled from "styled-components";

export default function MuteButton({ isMuted, setIsMuted, setCurrentVolume }) {
  function toggleMute() {
    const toggle = isMuted ? 0.3 : 0;
    setCurrentVolume(toggle);
    setIsMuted(!isMuted);
  }

  return (
    <StyledMuteButton type="button" onClick={toggleMute}>
      <p>{isMuted ? "Unmute" : "Mute"}</p>
    </StyledMuteButton>
  );
}

const StyledMuteButton = styled.button`
  border: none;
  box-shadow: none;
  padding-inline: 1rem;
  padding-block: 0.1rem;
  background-color: transparent;
  cursor: pointer;

  p {
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
  }
`;
