import * as Styled from "./LegacyAnimation.styled";

export default function LegacyAnimation({ color, opacity }) {
  return (
    <>
      <Styled.Container color={color} $opacity={opacity}>
        <Styled.BlobsContainer>
          <Styled.Blob $duration={"2s"} color={color} />
          <Styled.Blob $duration={"6s"} color={color} />
        </Styled.BlobsContainer>
      </Styled.Container>
    </>
  );
}
