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

  //   // Fetch Events refreshing every two Minutes
  //   const {
  //     data: events,
  //     isLoading: isLoadingEvents,
  //     error: errorEvents,
  //     mutate: mutateEvents,
  //   } = useSWR("/api/events", fetcher, { refreshInterval: 2 * 60 * 1000 });

  //   const fetchedEvents = {
  //     events,
  //     isLoadingEvents,
  //     errorEvents,
  //   };

  //   const filterEventsByCategoryID = useCallback(
  //     (categoryID) => {
  //       if (isLoadingEvents) {
  //         return;
  //       }
  //       return events.filter((ev) => ev.category._id === categoryID);
  //     },
  //     [events]
  //   );

  //   function getEventByID(eventID) {
  //     const {
  //       data: event,
  //       isLoading: isLoadingEvent,
  //       error: errorEvent,
  //       mutate: mutateEvent,
  //     } = useSWR(eventID ? `/api/events/${eventID}` : null);

  //     return { event, isLoadingEvent, errorEvent, mutateEvent };
  //   }

  //   const {
  //     data: comments,
  //     isLoading: isLoadingComments,
  //     error: errorComments,
  //     mutate: mutateComments,
  //   } = useSWR("/api/comments/", fetcher);
  //   const fetchedComments = {
  //     comments,
  //     isLoadingComments,
  //     errorComments,
  //     mutateComments,
  //   };

  //   async function createEvent(eventData) {
  //     const response = await fetch("/api/events", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(eventData),
  //     });

  //     if (response.ok) {
  //       mutateEvents();
  //       const newEvent = await response.json();
  //       return newEvent.id;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }

  //   async function updateEvent(eventData, id) {
  //     const response = await fetch(`/api/events/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(eventData),
  //     });

  //     if (response.ok) {
  //       mutateEvents();
  //       return true;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }

  //   async function deleteEvent(id) {
  //     const response = await fetch(`/api/events/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (response.ok) {
  //       mutateEvents();
  //       return true;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }
  //   async function deleteComment(id) {
  //     const response = await fetch(`/api/comments/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (response.ok) {
  //       mutateComments();
  //       return true;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }

  //   async function joinEvent(userId, _id, mutateEvent) {
  //     const response = await fetch(`/api/user/${userId}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userId: userId,
  //         eventId: _id,
  //       }),
  //     });
  //     if (response.ok) mutateEvent();
  //   }

  //   async function updateUser(event, user) {
  //    event.preventDefault();
  //     const data = new FormData(event.target);
  //     const formData = Object.fromEntries(data);
  //     const userData = { ...user, ...formData };
  //     const response = await fetch(`/api/user/${userData.id}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     if (response.ok) {
  //       return true;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }

  //   async function addComment(id, comment, userId) {
  //     const response = await fetch(`/api/comments`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         createdBy: userId,
  //         parentEventId: id,
  //         creationDate: new Date(),
  //         text: comment,
  //       }),
  //     });

  //     if (response.ok) {
  //       mutateComments();
  //       return true;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }

  //   async function likeComment(_id, userId) {
  //     const response = await fetch(`/api/comments/${_id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         _id,
  //         userId: userId,
  //       }),
  //     });

  //     if (response.ok) {
  //       mutateComments();
  //     }
  //   }

  //   async function editComment(_id, comment) {
  //     const response = await fetch(`/api/comments/${_id}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         _id: _id,
  //         text: comment,
  //       }),
  //     });

  //     if (response.ok) {
  //       mutateComments();
  //       return true;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }

  //   async function addReply(id, comment, userId) {
  //     const response = await fetch(`/api/comments`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         createdBy: userId,
  //         parentCommentId: id,
  //         creationDate: new Date(),
  //         text: comment,
  //       }),
  //     });

  //     if (response.ok) {
  //       mutateComments();
  //       return true;
  //     } else if (!response.ok) {
  //       return false;
  //     }
  //   }

  return (
    <DataContext.Provider
      value={{
        fetchedAllEntries,
        fetchedUserEntries,
        fetchedActivities,
        // fetchedEvents,
        // filterEventsByCategoryID,
        // getEventByID,
        // createEvent,
        // updateEvent,
        // deleteEvent,
        // addComment,
        // likeComment,
        // fetchedComments,
        // addReply,
        // joinEvent,
        // editComment,
        // deleteComment,
        // updateUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
