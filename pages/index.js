import { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { page } = router.query;
  const [dashboardIsOpen, setDashboardIsOpen] = useState(false);
  const [audioTrigger, setAudioTrigger] = useState(false);
  const { data: allEntries } = useSWR("/api/entries");
  const { data: session } = useSession();
  const { data: allActivities } = useSWR("/api/activities");
  const [anonymousFetchedData, setAnonymousFetchedData] = useState({
    allEntries: [],
    lastWeekEntries: [],
    allActivities: [],
  });
  const [userFetchedData, setUserFetchedData] = useState({
    userEntries: [],
    userLastWeekEntries: [],
    allActivities: [],
  });

  return (
    <>
      {!links.includes(tool) ? (
        <p>(404) page not found</p>
      ) : (
        <>
          {}
          <ActionBar />
          {dashboardIsOpen && <Dashboard />}
          <ToolMoodMeasurer page={page} setPage={setPage} />
          {page === "smiletrainer" && <QuotesWrapper />}
          {page === "newentry" && <EntryFlow />}
          {page === "singleentry" && <SingleEntry />}
          {page === "tool" && <ToolWrapper />}
        </>
      )}
    </>
  );
}

// props: session from _app.js
// states: dashboardIsOpen, audioTrigger
// anonymousFetchedData (nicht eingeloggt): allEntries, lastWeekEntries, AllActivities
// userFetchedData (eingeloggt): userEntries, userLastWeekEntries, AllActivities
// functions: fetchData
//        handleDashboardIsOpen()
// Page Routing: const { page } = router.query; (https://mood-tracker.com/smiletrainer)
