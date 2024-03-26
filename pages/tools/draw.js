import CanvasComponent from "@/components/Drawing/Drawing";
import styled from "styled-components";

export default function DrawingPage() {
  return (
    <CenteredBox>
      <CanvasComponent />
    </CenteredBox>
  );
}

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
`;
