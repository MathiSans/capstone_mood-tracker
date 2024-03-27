import * as Styled from "./LegacyAnimation.styled";

export default function LegacyAnimation({ color, opacity }) {
  return (
    <Styled.Container $opacity={opacity}>
      <Styled.BlobsContainer>
        <Styled.Blob $duration={"20s"} color={color} />
        {/* {/* <Styled.Blob duration={"40s"} color={color} /> */}
        <Styled.Blob $duration={"60s"} color={color} />
      </Styled.BlobsContainer>
    </Styled.Container>
  );
}
