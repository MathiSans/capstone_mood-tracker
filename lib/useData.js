import { createContext, useContext, useCallback } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const DataContext = createContext();
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const { data: session } = useSession();
  const {
    data: allEntries,
    isLoading: isLoadingEntries,
    error: errorEntries,
  } = useSWR("/api/entries", fetcher);

  const {
    data: allActivities,
    isLoading: isLoadingAllActivities,
    error: errorAllActivities,
  } = useSWR("/api/activities", fetcher);

  const {
    data: allUsers,
    isLoading: isLoadingAllUsers,
    error: errorAllUsers,
  } = useSWR("/api/user", fetcher);

  const {
    data: allCommunity,
    isLoading: isLoadingAllCommunity,
    error: errorAllCommunity,
  } = useSWR("/api/community", fetcher);

  const userEntries =
    allEntries && !isLoadingEntries && !errorEntries && session
      ? allEntries.filter((entry) => entry.user === session.user.id)
      : "no user logged in";

  const onlyUserMadeAndAnonymousActivities =
    allActivities && !isLoadingAllActivities && !errorAllActivities
      ? allActivities.filter(
          (activity) =>
            !activity.user || activity.user === (session && session.user.id)
        )
      : "no activities available";

  const fetchedActivities = {
    activities: onlyUserMadeAndAnonymousActivities,
    isLoadingActivities: isLoadingAllActivities,
    errorActivities: errorAllActivities,
  };

  const fetchedUserEntries = {
    userEntries,
    isLoadingEntries,
    errorEntries,
  };

  const fetchedAllEntries = {
    allEntries,
    isLoadingEntries,
    errorEntries,
  };

  const fetchedAllUsers = {
    allUsers,
    isLoadingAllUsers,
    errorAllUsers,
  };

  const fetchedCommunity = {
    allCommunity,
    isLoadingAllCommunity,
    errorAllCommunity,
  };

  return (
    <DataContext.Provider
      value={{
        fetchedAllEntries,
        fetchedUserEntries,
        fetchedActivities,
        fetchedAllUsers,
        fetchedCommunity,
        // add new fetched...,
        // add...,
        // add...,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
