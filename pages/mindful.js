import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import { useRouter } from "next/router";
import GuidedMeditation from "@/components/GuidedMeditation/GuidedMeditation";

export default function Entries() {
  const router = useRouter();

  return (
    <>
      <Guide text={"Guided Meditation"} />
      <GuidedMeditation />

      <NavButton handleClick={() => router.back}>back</NavButton>
    </>
  );
}
