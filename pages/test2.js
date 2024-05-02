// PusherTest.js
import { useEffect } from "react";
import Pusher from "pusher-js";

const PusherTest = () => {
  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher("ca102044575ed26dea17", {
      cluster: "eu",
      // Add any other options here
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      alert(JSON.stringify(data));
    });

    return () => {
      // Unsubscribe from Pusher channels when component unmounts
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Pusher Test</h1>
      <p>
        Try publishing an event to channel <code>my-channel</code> with event
        name <code>my-event</code>.
      </p>
    </div>
  );
};

export default PusherTest;
