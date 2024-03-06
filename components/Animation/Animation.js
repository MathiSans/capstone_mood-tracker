import * as Styled from "./Animation.styled";

export default function Animation({ color, opacity }) {
  return (
    <Styled.Container opacity={opacity}>
      <Styled.BlobsContainer className="blobs">
        <Styled.Blob className="blob a" color={color} />
        <Styled.Blob className="blob b" color={color} />
        <Styled.Blob className="blob c" color={color} />
      </Styled.BlobsContainer>
    </Styled.Container>
  );
}
