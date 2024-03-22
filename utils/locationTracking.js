export default async function fetchLocation() {
  try {
    const response = await fetch("https://ipinfo.io/json");
    if (!response.ok) {
      throw new Error("Failed to fetch location information");
    }
    const data = await response.json();
    const region = data.region || "unknown";
    return region;
  } catch (error) {
    console.error("Error fetching location:", error.message);
    return null;
  }
}
