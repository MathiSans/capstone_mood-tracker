import dbConnect from "@/db/models/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const entry = await Entry.findById(id);

    if (!entry) {
      return response.status(404).json({ status: "Not found!" });
    }
    response.status(200).json(entry);
  }

  if (request.method === "PUT") {
    const updatedEntry = request.body;
    await Entry.findByIdAndUpdate(id, updatedEntry);
    response.status(200).json({ status: "Entry updated." });
  }

  if (request.method === "DELETE") {
    await Entry.findByIdAndDelete(id);
    response.status(200).json({ status: "Entry deleted." });
  }
}
