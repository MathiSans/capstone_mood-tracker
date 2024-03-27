import React from "react";
import Guide from "@/components/Guide/Guide";
import EntriesList from "@/components/EntriesList/EntriesList";
import { Container, Navigation, Page } from "@/components/Layout/Layout.styled";
import { useState } from "react";
import useSWR from "swr";

export default function Entries() {
  const { data, isLoading } = useSWR("/api/entries");
  const [filter, setFilter] = useState(""); //Filter Entries State

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!data) {
    return;
  }

  //Filter Entries Code
  // Function to filter entries based on the last 7 days
  function filterLast7Days(entry) {
    const today = new Date(); // Current date
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7); // Subtract 7 days

    const entryDate = new Date(entry.date_created);
    return entryDate >= sevenDaysAgo && entryDate <= today;
  }

  // Filter entries
  const filteredEntries = data.filter(filterLast7Days);

  // Print the filtered entries
  filteredEntries.forEach((entry) => {
    console.log(entry.date_created);
  });

  function handleEntryFilter(event) {
    if (event.target.value === "1") {
      data.filter((week) => {
        week.date;
      });
      setFilter("value 1");
    }
    if (event.target.value === "2") {
      setFilter("value 2");
    }
    if (event.target.value === "3") {
      setFilter("value 3");
    }
  }
  //End

  console.log(filter);
  return (
    <Container>
      <Page>
        <Guide text={"emotion collection"} />
        <select onChange={handleEntryFilter}>
          <option value="2">2</option>
          <option value="1">Show Emotion of the Last Week</option>
          <option value="3">3</option>
        </select>
        <EntriesList data={data} />
      </Page>
    </Container>
  );
}
