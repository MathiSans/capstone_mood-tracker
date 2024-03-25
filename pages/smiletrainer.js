import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import { useRouter } from "next/router";
import * as Styled from "@/components/Layout/Layout.styled";
import FaceDetection from "@/components/FaceDetection/FaceDetection";

export default function SmileTrainer() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Page>
        <Guide text={"Smile Trainer"} />
        <FaceDetection />
      </Styled.Page>
      <Styled.Navigation>
        <NavButton handleClick={() => router.push("/")}>back</NavButton>
      </Styled.Navigation>
    </Styled.Container>
  );
}
