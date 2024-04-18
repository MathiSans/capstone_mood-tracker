import { useState, useEffect } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { URL } = router.query;
  const { data: allEntries } = useSWR("/api/entries");
  const { data: allActivities } = useSWR("/api/activities");
  const { data: session } = useSession();
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [dashboardIsOpen, setDashboardIsOpen] = useState(false);
  const [anonymousFetchedData, setAnonymousFetchedData] = useState({});
  const [userFetchedData, setUserFetchedData] = useState({});

  useEffect(() => {
    if (allEntries && session && allActivities) {
      const userEntries = allEntries.filter(
        (entry) => entry.user === session.user.id
      );
      setUserFetchedData((prevState) => ({
        ...prevState,
        userEntries,
        allActivities,
      }));
      setAnonymousFetchedData((prevState) => ({
        ...prevState,
        allEntries,
        allActivities,
      }));
    }
  }, [allEntries, session, allActivities]);

  console.log("User:", userFetchedData);
  console.log("Anon:", anonymousFetchedData);

  function handleDashboardIsOpen() {
    setDashboardIsOpen(!dashboardIsOpen);
  }

  return (
    <>
      {/* <ActionBar
        session={session}
        handleDashboardIsOpen={handleDashboardIsOpen}
        dashboardIsOpen={dashboardIsOpen}
      />
      {dashboardIsOpen && (
        <Dashboard
          fetchData={session ? userFetchedData : anonymousFetchedData}
        />
      )} */}
      {/* {URL.includes("smiletrainer") && <QuotesWrapper />}
      {URL.includes("newentry") && <EntryFlow />}
      {URL.includes("singleentry") && <SingleEntry />}
      {URL.includes("activities") && <ToolWrapper />} */}
    </>
  );
}

// Page Routing: const { page } = router.query; (https://mood-tracker.com/smiletrainer)
