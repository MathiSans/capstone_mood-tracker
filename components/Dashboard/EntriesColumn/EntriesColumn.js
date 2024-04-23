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
  const { data: session } = useSession();

  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const lastWeek = lastWeekAnalyser(session ? userEntries : allEntries);
  console.log(lastWeek);

  const handleExperienceClick = (experience) => {
    console.log("experience", experience);
    setTargetExperience(experience);
    setSingleExperienceList(!singleExperienceList);
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
    // if(!singleExperienceList){
    //   const singleEmotionEntryList = experiences.filter(
    //     (experience) => experience.experience === targetExperience
    //   );
    //   return singleEmotionEntryList
    // }
  }
  const allEmotionsDisplayed = entriesToDisplay({
    lastWeek,
    session,
    isLastWeek,
  });
  const singleEmotionDisplayed = allEmotionsDisplayed.filter(
    (experience) => experience.experience === targetExperience
  );
  return (
    <Grid>
      <BarChartTile
        setIsLastWeek={setIsLastWeek}
        isLastWeek={isLastWeek}
        targetExperience={targetExperience}
        setTargetExperience={setTargetExperience}
        handleExperienceClick={handleExperienceClick}
      />
      <EntriesList
        data={
          singleExperienceList ? singleEmotionDisplayed : allEmotionsDisplayed
        }
        targetExperience={targetExperience}
        setTargetExperience={setTargetExperience}
      />
    </Grid>
  );
}
