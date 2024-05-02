// Import the Pusher library
const Pusher = require("pusher");

// Initialize Pusher with environment variables
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

// Trigger an event on the desired channel with the event name
pusher
  .trigger("my-channel", "my-event", {
    message: "Hello from server!",
  })
  .then(() => {
    console.log("Event triggered successfully");
  })
  .catch((error) => {
    console.error("Error triggering event:", error);
  });
