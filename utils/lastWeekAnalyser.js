export default function lastWeekAnalyser(data) {
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

    const lastSevenDaysEntries = data.filter((entry) => {
      const entryDate = entry.time.split(",")[0].trim(); // Get the date part of the entry's time
      const match = lastSevenDays.some((dates) => {
        const [date1, date2] = dates.split(",").map((date) => date.trim()); // Split the dates in lastSevenDays array
        return entryDate === date1 || entryDate === date2; // Check for a match
      });
      return match;
    });
    return lastSevenDaysEntries;
  }
}
