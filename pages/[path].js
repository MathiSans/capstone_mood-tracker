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
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  const { dashboardIsOpen, handleDashboardIsOpen } = useDashboardState();
  const { sphereState } = useSphereState();
  const router = useRouter();
  const { path } = router.query;
  const { data: session } = useSession();

  const componentMap = {
    start: LandingPage,
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
