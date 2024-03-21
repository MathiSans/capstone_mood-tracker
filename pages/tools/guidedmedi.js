import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import { useRouter } from "next/router";
import * as Styled from "@/components/Layout/Layout";
import GuidedMeditation from "@/components/GuidedMeditation/GuidedMeditation";

export default function Entries() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Page>
        <Guide text={"Guided Meditation"} />
        <GuidedMeditation />
      </Styled.Page>
      <Styled.Navigation>
        <NavButton handleClick={() => router.back}>back</NavButton>
      </Styled.Navigation>
    </Styled.Container>
  );
}
