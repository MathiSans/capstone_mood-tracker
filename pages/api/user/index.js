import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const users = await User.find();
      return response.status(200).json(users);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: error.message });
  }
}
