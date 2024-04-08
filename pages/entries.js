import React from "react";
import Guide from "@/components/Guide/Guide";
import EntriesList from "@/components/EntriesList/EntriesList";
import { Container, Navigation, Page } from "@/components/Layout/Layout.styled";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Entries() {
  const { data, isLoading } = useSWR("/api/entries");
  const [filter, setFilter] = useState("showAll"); //Filter Entries State
  const [filtered, setFiltered] = useState([]);
  const [isVisualized, setIsVisualized] = useState(false);
  const reversedData = Array.isArray(data) ? [...data].reverse() : [];

  useEffect(() => {
    if (Array.isArray(data)) {
      const currentDate = new Date();
      // const reversedData = [...data].reverse();
      // Create an array to store the last 7 days' dates
      const lastSevenDays = [];

      // Loop through the last 7 days and push their formatted dates into the array
      for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
        const formattedDate1 = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
        const formattedDate2 = `${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`;
        lastSevenDays.push(`${formattedDate1}, ${formattedDate2}`);
      }

      if (filter === "lastWeek" || "moodsMap") {
        const lastSevenDaysEntries = reversedData.filter((entry) => {
          const entryDate = entry.time.split(",")[0].trim(); // Get the date part of the entry's time
          const match = lastSevenDays.some((dates) => {
            const [date1, date2] = dates.split(",").map((date) => date.trim()); // Split the dates in lastSevenDays array
            return entryDate === date1 || entryDate === date2; // Check for a match
          });
          return match;
        });

        setFiltered(lastSevenDaysEntries);
      }
      if (filter === "showAll") {
        setFiltered(reversedData);
      }
    } else {
      setFiltered(reversedData);
    }
  }, [data, filter]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!data) {
    return;
  }

  function handleEntryFilter(event) {
    if (event.target.value === "showAll") {
      setFilter("showAll");
      setFiltered([...data].reverse());
    }
    if (event.target.value === "lastWeek") {
      setFilter("lastWeek");
    }
    // if (event.target.value === "moodsMap") {
    //   setFilter("moodsMap");
    // }
  }

  function handleIsVisualized() {
    setIsVisualized(!isVisualized);
  }

  return (
    <Container>
      <Page>
        <Guide text={"emotion collection"} />
        <select onChange={handleEntryFilter}>
          <option value="showAll">Show All</option>
          <option value="lastWeek">Show Emotion of the Last Week</option>
          {/* <option value="moodsMap">Visualize</option> */}
        </select>
        <EntriesList
          filtered={filtered}
          filter={filter}
          handleIsVisualized={handleIsVisualized}
          isVisualized={isVisualized}
        />
      </Page>
    </Container>
  );
}
