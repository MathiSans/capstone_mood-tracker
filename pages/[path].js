import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useData } from "@/lib/useData";

import { Container } from "@/components/StyledComponents/Path.styled";
import Dashboard from "@/components/Dashboard/Dashboard";
import Animation from "@/components/3DAnimation/3DAnimation";
import ActionBar from "@/components/ActionBar/ActionBar";
import NewEntryFlow from "./flow";
import QuotesWrapper from "@/components/QuotesWrapper/QuotesWrapper";
import SmileTrainerWrapper from "@/components/SmileTrainerWrapper/SmileTrainerWrapper";
import GuidedMeditation from "@/components/GuidedMeditation/GuidedMeditation";
import Entry from "@/components/SingleEntry/Entry";
import { useDashboardState } from "@/components/DashboardStateProvider/DashboardStateProvider";
import { useSphereState } from "@/components/ContextProviders/SphereStateProvider/SphereStateProvider";

export default function Home() {
  const { dashboardIsOpen, handleDashboardIsOpen } = useDashboardState();
  const { sphereState, handleSphereState } = useSphereState();
  const router = useRouter();
  const { path } = router.query;
  const { data: session } = useSession();
  const [audioTrigger, setAudioTrigger] = useState(false);
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const { activities, isLoadingActivities, errorActivities } =
    useData().fetchedActivities;

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
        {dashboardIsOpen && <Dashboard />}
        {path && path.includes("id:") && !dashboardIsOpen && (
          <Entry id={path.replace("id:", "")} />
        )}
        {path === "new-entry" && !dashboardIsOpen && <NewEntryFlow />}
        {path === "quotes" && !dashboardIsOpen && <QuotesWrapper />}
        {path === "smiletrainer" && !dashboardIsOpen && <SmileTrainerWrapper />}
        {path === "guided-meditation" && !dashboardIsOpen && (
          <GuidedMeditation />
        )}
      </Container>
    </>
  );
}
