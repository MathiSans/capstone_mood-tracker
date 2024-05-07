import dbConnect from "@/db/connect";
import Community from "@/db/models/Community";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const entries = await Community.find();
      return response.status(200).json(entries);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const communityData = request.body;
      await Community.create(communityData);

      response.status(201).json({ status: "Community created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
