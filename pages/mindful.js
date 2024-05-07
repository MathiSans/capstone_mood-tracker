import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import { useRouter } from "next/router";
import GuidedMeditation from "@/components/GuidedMeditation/GuidedMeditation";
import styled from "styled-components";

export default function Entries() {
  const router = useRouter();

  return (
    <>
      <Guide text={"Guided Meditation"} />
      <GuidedMeditation />
      <ButtonContainer>
        <NavButton handleClick={() => router.back}>back</NavButton>
      </ButtonContainer>
    </>
  );
}
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
