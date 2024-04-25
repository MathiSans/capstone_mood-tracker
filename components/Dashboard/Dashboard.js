import ActivitiesColumn from "./ActivitiesColumn/ActivitiesColumn";
import CommunityColumn from "./CommunityColumn/CommunityColumn";
import { Container } from "./Dashboard.styled";
import EntriesColumn from "./EntriesColumn/EntriesColumn";
import Menu from "./Menu/Menu";
import OverviewColumn from "./OverviewColumn/OverviewColumn";
import { useState } from "react";

export default function Dashboard() {
  const [selectedColumn, setSelectedColumn] = useState("overview");

  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "entries", label: "Entries" },
    { id: "activities", label: "Activities" },
    { id: "community", label: "Community" },
  ];

  function handleSelectedColumnChange(column) {
    setSelectedColumn(column);
  }

  return (
    <Container>
      <Menu
        menuItems={menuItems}
        selectedColumn={selectedColumn}
        handleSelectedColumnChange={handleSelectedColumnChange}
      />
      {selectedColumn === menuItems[0].id && <OverviewColumn />}
      {selectedColumn === menuItems[1].id && <EntriesColumn />}
      {selectedColumn === menuItems[2].id && <ActivitiesColumn />}
      {selectedColumn === menuItems[3].id && <CommunityColumn />}
    </Container>
  );
}
