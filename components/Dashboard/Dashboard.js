import ActivitiesColumn from "./ActivitiesColumn/ActivitiesColumn";
import { Container } from "./Dashboard.styled";
import EntriesColumn from "./EntriesColumn/EntriesColumn";
import Menu from "./Menu/Menu";
import OverviewColumn from "./OverviewColumn/OverviewColumn";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import last7DaysAnalyser from "@/utils/last7DaysAnalyser";

export default function Dashboard() {
  const [selectedColumn, setSelectedColumn] = useState("overview");
  const [isLast7Days, setIsLast7Days] = useState(true);
  const [targetExperience, setTargetExperience] = useState(null);
  const [singleExperienceList, setSingleExperienceList] = useState(false);
  const [clickedExperience, setClickedExperience] = useState(null);

  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "entries", label: "Entries" },
    { id: "activities", label: "Activities" },
  ];

  function handleSelectedColumnChange(column) {
    setSelectedColumn(column);
  }

  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const { data: session } = useSession();

  const last7DaysEntries = last7DaysAnalyser(
    session ? userEntries : allEntries
  );
  const allEmotionsDisplayed = entriesToDisplay({
    last7DaysEntries,
    session,
    isLast7Days,
  });

  const handleExperienceClick = (experience) => {
    setClickedExperience(experience);
    setTargetExperience(experience);
    if (experience === targetExperience) {
      setSingleExperienceList(!singleExperienceList);
      setClickedExperience(null);
    }
  };

  function entriesToDisplay({ last7DaysEntries, session }) {
    if (isLast7Days) {
      return last7DaysEntries;
    }
    if (!isLast7Days && session) {
      return userEntries;
    }
    if (!isLast7Days && !session) {
      return allEntries;
    }
  }

  const singleEmotionDisplayed =
    allEmotionsDisplayed &&
    allEmotionsDisplayed.filter(
      (experience) => experience.experience === targetExperience
    );

  return (
    <Container>
      <Menu
        menuItems={menuItems}
        selectedColumn={selectedColumn}
        handleSelectedColumnChange={handleSelectedColumnChange}
      />
      {selectedColumn === menuItems[0].id && (
        <OverviewColumn
          isLast7Days={isLast7Days}
          setIsLast7Days={setIsLast7Days}
          targetExperience={targetExperience}
          setTargetExperience={setTargetExperience}
          handleExperienceClick={handleExperienceClick}
          singleExperienceList={singleExperienceList}
          clickedExperience={clickedExperience}
          setSingleExperienceList={setSingleExperienceList}
          singleEmotionDisplayed={singleEmotionDisplayed}
          userEntries={userEntries}
          allEntries={allEntries}
          last7DaysAnalyser={last7DaysAnalyser}
          last7DaysEntries={last7DaysEntries}
          isLoadingEntries={isLoadingEntries}
          errorEntries={errorEntries}
        />
      )}
      {selectedColumn === menuItems[1].id && (
        <EntriesColumn
          isLast7Days={isLast7Days}
          setIsLast7Days={setIsLast7Days}
          targetExperience={targetExperience}
          setTargetExperience={setTargetExperience}
          handleExperienceClick={handleExperienceClick}
          singleExperienceList={singleExperienceList}
          clickedExperience={clickedExperience}
          setSingleExperienceList={setSingleExperienceList}
          singleEmotionDisplayed={singleEmotionDisplayed}
          userEntries={userEntries}
          allEntries={allEntries}
          isOnEntriesPage={true}
          last7DaysAnalyser={last7DaysAnalyser}
          last7DaysEntries={last7DaysEntries}
          isLoadingEntries={isLoadingEntries}
          errorEntries={errorEntries}
          allEmotionsDisplayed={allEmotionsDisplayed}
        />
      )}
      {selectedColumn === menuItems[2].id && <ActivitiesColumn />}
    </Container>
  );
}
