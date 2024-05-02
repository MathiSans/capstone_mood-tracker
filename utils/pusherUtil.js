import Pusher from "pusher-js";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_KEY,
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true, // if you're using HTTPS
});

export default pusher;
