import { Grid } from "../Dashboard.styled";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";
import { useState } from "react";
import EntriesList from "./EntriesList/EntriesList";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import lastWeekAnalyser from "@/utils/lastWeekAnalyser";

export default function EntriesColumn() {
  const [isLastWeek, setIsLastWeek] = useState(true);
  const [targetExperience, setTargetExperience] = useState(null);
  const [singleExperienceList, setSingleExperienceList] = useState(false);
  const [clickedExperience, setClickedExperience] = useState(null);
  // const [idsOfEntriesDisplayed, setIdsOfEntriesDisplayed] = useState([]);

  const { data: session } = useSession();

  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const lastWeek = lastWeekAnalyser(session ? userEntries : allEntries);
  console.log(lastWeek);

  const handleExperienceClick = (experience) => {
    setClickedExperience(experience);
    setTargetExperience(experience);
    if (experience === targetExperience) {
      setSingleExperienceList(!singleExperienceList);
      setClickedExperience(null);
    }
  };

  function entriesToDisplay({ lastWeek, session }) {
    if (isLastWeek) {
      return lastWeek;
    }
    if (!isLastWeek && session) {
      return userEntries;
    }
    if (!isLastWeek && !session) {
      return allEntries;
    }
  }
  const allEmotionsDisplayed = entriesToDisplay({
    lastWeek,
    session,
    isLastWeek,
  });
  const singleEmotionDisplayed = allEmotionsDisplayed.filter(
    (experience) => experience.experience === targetExperience
  );

  const { allCommunity, isLoadingAllCommunity, errorAllCommunity } =
    useData().fetchedCommunity;

  // const friendsMessages = allCommunity.filter((friends) => {
  //   return friends.entryId === entry._id;
  // }).length;
  // console.log("friendsMessages", friendsMessages);
  // const handleEntryRender = (entryId) => {
  //   console.log("entryId", entryId);
  //   // setIdsOfEntriesDisplayed((prevIds) => [...prevIds, entryId]);
  // };
  // console.log("state Entry ID:", idsOfEntriesDisplayed);

  return (
    <Grid>
      <BarChartTile
        setIsLastWeek={setIsLastWeek}
        isLastWeek={isLastWeek}
        targetExperience={targetExperience}
        setTargetExperience={setTargetExperience}
        handleExperienceClick={handleExperienceClick}
        singleExperienceList={singleExperienceList}
        clickedExperience={clickedExperience}
        setSingleExperienceList={setSingleExperienceList}
        singleEmotionDisplayed={singleEmotionDisplayed}
      />

      <EntriesList
        data={
          singleExperienceList ? singleEmotionDisplayed : allEmotionsDisplayed
        }
        targetExperience={targetExperience}
        setTargetExperience={setTargetExperience}
        // onEntryRender={"handleEntryRender"}
      />
    </Grid>
  );
}
