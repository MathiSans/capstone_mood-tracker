import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useData } from "@/lib/useData";
import { Container } from "@/components/StyledComponents/Path.styled";
import Dashboard from "@/components/Dashboard/Dashboard";
import Animation from "@/components/3DAnimation/3DAnimation";
import NewEntryFlow from "./flow";

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
      <Animation color={"grey"} opacity={1} hideInterface={false} />
      <Container>
        {dashboardIsOpen && <Dashboard />}
        {path === "newentry" && <NewEntryFlow />}
      </Container>
    </>
  );
}

{
  /* <Entry id={path} />

{path === "index" && <div>HOME</div>}
<div>Path: {path}</div>
{!isLoadingActivities && <div>Aktivitiäten: {activities.length}</div>}
{!isLoadingEntries && (
  <div>
    User-Entries: {session ? userEntries.length : "no user loggeed in"}
  </div>
)}
{!isLoadingEntries && <div>Alle Entries: {allEntries.length}</div>}

<ActionBar
session={session}
handleDashboardIsOpen={handleDashboardIsOpen}
dashboardIsOpen={dashboardIsOpen}
/> */
}
