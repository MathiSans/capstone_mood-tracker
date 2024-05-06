import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useData } from "@/lib/useData";
import { Container } from "@/components/StyledComponents/Path.styled";
import Dashboard from "@/components/Dashboard/Dashboard";
import Animation from "@/components/3DAnimation/3DAnimation";
import ActionBar from "@/components/ActionBar/ActionBar";
import Flow from "@/components/NewEntryFlow/Flow";
import QuotesWrapper from "@/components/QuotesWrapper/QuotesWrapper";
import SmileTrainerWrapper from "@/components/SmileTrainerWrapper/SmileTrainerWrapper";
import GuidedMeditation from "@/components/GuidedMeditation/GuidedMeditation";
import Entry from "@/components/SingleEntry/Entry";
import { useDashboardState } from "@/components/DashboardStateProvider/DashboardStateProvider";
import { useSphereState } from "@/components/ContextProviders/SphereStateProvider/SphereStateProvider";
import { motion, AnimatePresence } from "framer-motion";
import { animations } from "@/components/AnimationWrapper/animations";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh; /* Setze die Höhe des Containers auf die gesamte Bildschirmhöhe */
`;

export default function Home() {
  const { dashboardIsOpen, handleDashboardIsOpen } = useDashboardState();
  const { sphereState, handleSphereState } = useSphereState();
  const router = useRouter();
  const { path } = router.query;
  const { data: session } = useSession();

  const componentMap = {
    "new-entry": Flow,
    quotes: QuotesWrapper,
    smiletrainer: SmileTrainerWrapper,
    "guided-meditation": GuidedMeditation,
  };

  const Component = path?.includes("id:") ? Entry : componentMap[path];

  return (
    <>
      <ActionBar
        session={session}
        dashboardIsOpen={dashboardIsOpen}
        handleDashboardIsOpen={handleDashboardIsOpen}
      />
      <Animation
        color={sphereState.color}
        opacity={sphereState.intensity}
        hideInterface={false}
      />
      <LogoContainer
        onClick={() => handleSphereState({ color: "grey", intensity: 0.1 })}
      >
        <Link href="/start">
          <Image
            src="/images/mood-tracker-logo1.png"
            alt="Your Logo"
            width={45} // Setze die Breite deines Logos
            height={45} // Setze die Höhe deines Logos
          />
        </Link>
      </LogoContainer>
      <Container>
        <AnimatePresence mode="wait">
          <Dashboard key="dashboard" dashboardIsOpen={dashboardIsOpen} />
          {Component && (
            <motion.div
              key={path}
              variants={animations}
              initial="fadeOut"
              animate={dashboardIsOpen ? "fadeOut" : "fadeIn"}
              exit="fadeOut"
              transition="easeInOut"
            >
              <Component id={path.replace("id:", "")} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}
