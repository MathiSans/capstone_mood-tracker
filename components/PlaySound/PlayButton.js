import styled from "styled-components";
import Image from "next/image";
import playing from "@/public/images/playing.gif";

export default function PlayButton({ handleIsPlaying, audioPlaying }) {
  return (
    <StyledPlayButton
      type="button"
      onClick={handleIsPlaying}
      audioPlaying={audioPlaying}
    >
      {audioPlaying ? (
        <Image width={50} height={16} src={playing} alt={"playing audio"} />
      ) : (
        <p>turn sound on</p>
      )}
    </StyledPlayButton>
  );
}

const StyledPlayButton = styled.button`
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
