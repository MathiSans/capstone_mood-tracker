import ActivitiesColumn from "./ActivitiesColumn/ActivitiesColumn";
import CommunityColumn from "./CommunityColumn/CommunityColumn";
import { Container } from "./Dashboard.styled";
import EntriesColumn from "./EntriesColumn/EntriesColumn";
import Menu from "./Menu/Menu";
import OverviewColumn from "./OverviewColumn/OverviewColumn";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import last7DaysAnalyser from "@/utils/last7DaysAnalyser";
import experienceAnalyser from "@/utils/experienceAnalyser";
import { animations } from "../AnimationWrapper/animations";

export default function Dashboard({ dashboardIsOpen }) {
  const [selectedColumn, setSelectedColumn] = useState("overview");
  const [isLast7Days, setIsLast7Days] = useState(true);
  const [targetExperience, setTargetExperience] = useState(null);
  const [singleExperienceList, setSingleExperienceList] = useState(false);
  const [clickedExperience, setClickedExperience] = useState(null);

  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "entries", label: "Entries" },
    { id: "activities", label: "Activities" },
    { id: "community", label: "Community" },
  ];

  function handleSelectedColumnChange(column) {
    setSelectedColumn(column);
  }

  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const {
    fetchedUserEntries: { userEntries },
  } = useData();
  const { data: session } = useSession();

  const last7DaysEntries =
    !isLoadingEntries && last7DaysAnalyser(session ? userEntries : allEntries);

  const allEmotionsDisplayed = entriesToDisplay();

  const handleExperienceClick = (experience) => {
    setClickedExperience(experience);
    setTargetExperience(experience);
    if (experience === targetExperience) {
      setSingleExperienceList(!singleExperienceList);
      setClickedExperience(null);
    }
  };

  function entriesToDisplay() {
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

  function handleFilterSwitchClick() {
    setIsLast7Days(!isLast7Days);
  }

  const visualizedData = isLast7Days
    ? experienceAnalyser(last7DaysEntries && last7DaysEntries)
    : experienceAnalyser(session ? userEntries : allEntries);
  return (
    <Container
      variants={animations}
      initial={dashboardIsOpen ? "show" : "hidden"}
      animate={dashboardIsOpen ? "show" : "hidden"}
      transition="easeInOut"
    >
      <Menu
        menuItems={menuItems}
        selectedColumn={selectedColumn}
        handleSelectedColumnChange={handleSelectedColumnChange}
      />
      {selectedColumn === menuItems[0].id && (
        <OverviewColumn
          isLast7Days={isLast7Days}
          handleExperienceClick={handleExperienceClick}
          singleExperienceList={singleExperienceList}
          clickedExperience={clickedExperience}
          singleEmotionDisplayed={singleEmotionDisplayed}
          entries={session ? userEntries : allEntries}
          isLoadingEntries={isLoadingEntries}
          errorEntries={errorEntries}
          handleFilterSwitchClick={handleFilterSwitchClick}
          visualizedData={visualizedData}
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
          singleEmotionDisplayed={singleEmotionDisplayed}
          isLoadingEntries={isLoadingEntries}
          errorEntries={errorEntries}
          allEmotionsDisplayed={allEmotionsDisplayed}
          handleFilterSwitchClick={handleFilterSwitchClick}
          visualizedData={visualizedData}
        />
      )}
      {selectedColumn === menuItems[2].id && <ActivitiesColumn />}
      {selectedColumn === menuItems[3].id && <CommunityColumn />}
    </Container>
  );
}
