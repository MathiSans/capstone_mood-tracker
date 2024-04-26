import { Grid } from "../Dashboard.styled";
import InboxTile from "../Tiles/InboxTile/InboxTile";
import OutboxTile from "../Tiles/OutboxTile/OutboxTile";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";

export default function CommunityColumn() {
  const [showSentence, setShowSentence] = useState(true);
  const [showFriendMessages, setShowFriendMessages] = useState(false);
  // const { id } = router.query;
  const { data: session } = useSession();

  const { data: entry, isLoading } = useSWR(`/api/entries/${id}`);
  const { allUsers, isLoadingAllUsers, errorAllUsers } =
    useData().fetchedAllUsers;
  const { allCommunity, isLoadingAllCommunity, errorAllCommunity } =
    useData().fetchedCommunity;
  console.log(allCommunity);

  const getUsername = (userId) => {
    const friendlyRecipient =
      !isLoadingAllUsers &&
      allUsers.filter((friend) => {
        return friend._id === userId;
      });
    console.log(friendlyRecipient);
    return friendlyRecipient[0].name;
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (!entry) {
    return;
  }

  function handleShowSentence() {
    setShowSentence(!showSentence);
  }

  return (
    <Grid>
      <InboxTile />
      <OutboxTile />
    </Grid>
  );
}
