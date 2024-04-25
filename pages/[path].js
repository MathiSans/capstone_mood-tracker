import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useData } from "@/lib/useData";

import { Container } from "@/components/StyledComponents/Path.styled";
import Dashboard from "@/components/Dashboard/Dashboard";
import Animation from "@/components/3DAnimation/3DAnimation";
import ActionBar from "@/components/ActionBar/ActionBar";
import NewEntryFlow from "./flow";
import Entry from "@/components/SingleEntry/Entry";

export default function Home() {
  const router = useRouter();
  const { path } = router.query;
  const { data: session } = useSession();
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [dashboardIsOpen, setDashboardIsOpen] = useState(true);
  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const { activities, isLoadingActivities, errorActivities } =
    useData().fetchedActivities;

  function handleDashboardIsOpen() {
    setDashboardIsOpen(!dashboardIsOpen);
  }

  return (
    <>
      <ActionBar
        session={session}
        dashboardIsOpen={dashboardIsOpen}
        handleDashboardIsOpen={handleDashboardIsOpen}
      />
      <Animation color={"grey"} opacity={1} hideInterface={false} />
      <Container>
        {dashboardIsOpen && <Dashboard />}
        {/* {path.includes("id:") && <Entry id={path.replace("id:", "")} />} */}
        {path === "newentry" && <NewEntryFlow />}
      </Container>
    </>
  );
}
