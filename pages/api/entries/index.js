import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const entries = await Entry.find();
      return response.status(200).json(entries);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const entryData = request.body;
      await Entry.create(entryData);

      response.status(201).json({ status: "Entry created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
