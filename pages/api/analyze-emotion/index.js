import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { formData, language } = req.body;

  try {
    const url =
      "https://ekman-emotion-analysis.p.rapidapi.com/ekman-emotion?all=true";
    const apiKey = process.env.X_RAPID_API_KEY;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "ekman-emotion-analysis.p.rapidapi.com",
      },
      body: JSON.stringify([
        {
          id: "1",
          language,
          text: JSON.stringify(formData), // Convert formData to JSON string
        },
      ]),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
