import dbConnect from "@/db/connect";
import Message from "@/db/models/Message";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const messages = await Message.find();
      return response.status(200).json(messages);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const messageData = request.body;
      await Message.create(messageData);

      response.status(201).json({ status: "Message created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
