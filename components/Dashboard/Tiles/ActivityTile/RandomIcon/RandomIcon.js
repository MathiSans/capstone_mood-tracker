import { Coolshape } from "coolshapes-react";
import * as Styled from "./RandomIcon.styled";

export default function RandomIcon({ activity }) {
  return (
    <Styled.RandomIconContainer>
      <Coolshape
        type={activity.shapeType}
        noise={false}
        index={activity.shapeIndex}
        size={90}
      />
    </Styled.RandomIconContainer>
  );
}
