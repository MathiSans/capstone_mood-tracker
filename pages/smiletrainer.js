import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import { useRouter } from "next/router";
import EntriesList from "@/components/EntriesList/EntriesList";
import * as Styled from "@/components/Layout/Layout";
import FaceDetection from "@/components/FaceDetection/FaceDetection";

export default function Entries() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Page>
        <Guide text={"Smile Trainer"} />
        <FaceDetection />
      </Styled.Page>
      <Styled.Navigation>
        <NavButton handleClick={() => router.push("/")}>Back to Home</NavButton>
      </Styled.Navigation>
    </Styled.Container>
  );
}
