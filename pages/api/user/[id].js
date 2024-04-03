import dbConnect from "@/db/dbConnect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;
  const user = await User.findById(id);

  if (request.method === "GET") {
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    } else {
      return response.status(200).json(user);
    }
  }

  if (req.method === "POST") {
    try {
      const { name, email, userId } = req.body;
      const user = await User.create({ name, email, userId });
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false });
  }
}
