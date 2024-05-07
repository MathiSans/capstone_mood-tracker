export default function getWeekdayFromTime(timeStr) {
  // Determine the date format based on the delimiter used in the date string
  const delimiter = timeStr.includes("/") ? "/" : ".";
  const [datePart, timePart] = timeStr.split(", ");

  const [day, month, year] = datePart.split(delimiter).map(Number);
  const [hour, minute, second] = timePart.split(":").map(Number);

  // Create a new Date object (months are 0-indexed in JavaScript Date)
  const dateObj = new Date(year, month - 1, day, hour, minute, second);

  // Get the weekday as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const weekdayIndex = dateObj.getDay();

  // Define an array of weekday names
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Return the weekday name based on the weekday index
  return weekdays[weekdayIndex];
}
