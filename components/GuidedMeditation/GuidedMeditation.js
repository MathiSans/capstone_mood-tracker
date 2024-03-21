import styled from "styled-components";
import Image from "next/image";

export default function GuidedMeditation() {
  return (
    <StyledContainer>
      <StyledImage
        height={100}
        width={100}
        alt="sunflowers"
        src="/images/sunflowers.jpeg"
      />
      <StyledIframe
        width="100%"
        height="60"
        src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&feed=%2Fbluewhale24%2Fguided-meditation-your-innermost-value%2F"
        frameborder="0"
      ></StyledIframe>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding-top: 2rem;
`;

const StyledIframe = styled.iframe`
  width: 25rem;
  position: absolute;
  bottom: 30%;
`;

const StyledImage = styled(Image)`
  position: absolute;
  width: 25rem;
  height: auto;
  top: 10%;
`;
