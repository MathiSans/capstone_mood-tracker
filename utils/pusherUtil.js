import Pusher from "pusher-js";

console.log("PUSHER_APP_ID:", process.env.PUSHER_APP_ID);
console.log("PUSHER_KEY:", process.env.PUSHER_KEY);
console.log("PUSHER_SECRET:", process.env.PUSHER_SECRET);
console.log("PUSHER_CLUSTER:", process.env.PUSHER_CLUSTER);

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true, // if you're using HTTPS
});

export default pusher;
