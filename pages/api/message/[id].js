import dbConnect from "@/db/connect";
import Message from "@/db/models/Message";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const message = await Message.findById(id);

    if (!message) {
      return response.status(404).json({ status: "Not found!" });
    }
    response.status(200).json(message);
  }

  if (request.method === "PUT") {
    const updatedMessage = request.body;
    await Message.findByIdAndUpdate(id, updatedMessage);
    response.status(200).json({ status: "Message updated." });
  }

  if (request.method === "DELETE") {
    await Message.findByIdAndDelete(id);
    response.status(200).json({ status: "Message deleted." });
  }
}
