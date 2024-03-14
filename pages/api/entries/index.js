import dbConnect from "@/db/models/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const entryData = request.body;
      await Entry.create(entryData);

      response.status(201).json({ status: "Entry saved" });
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
}
