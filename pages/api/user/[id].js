import dbConnect from "@/db/connect";
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
  } else if (request.method === "PUT") {
    const updatedUser = request.body;
    await User.findByIdAndUpdate(id, updatedUser);
    return response.status(200).json({ status: "User updated." });
  } else if (request.method === "POST") {
    try {
      const { name, email, userId } = request.body;
      const user = await User.create({ name, email, userId });
      return response.status(201).json({ success: true, data: user });
    } catch (error) {
      return response.status(400).json({ success: false });
    }
  } else {
    return response.status(405).json({ success: false });
  }
}
