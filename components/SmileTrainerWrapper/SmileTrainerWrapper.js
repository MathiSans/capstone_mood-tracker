import React from "react";
import Guide from "@/components/Guide/Guide";
import { useRouter } from "next/router";
import * as Styled from "@/components/Layout/Layout.styled";
import FaceDetection from "@/components/FaceDetection/FaceDetection";

export default function SmileTrainer() {
  const router = useRouter();

  return (
    <>
      <Guide text={"Smile Trainer"} />
      <FaceDetection />
    </>
  );
}