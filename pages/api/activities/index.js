import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const activities = await Activity.find();
      return response.status(200).json(activities);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const activityData = request.body;
      await Activity.create(activityData);
      response.status(201).json({ status: "Entry created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
