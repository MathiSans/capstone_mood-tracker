import { useState, useRef } from "react";
import MuteButton from "./MuteButton";
import PlaySound from "./PlaySound";

export default function AudioSettings({
  experience,
  audioTrigger,
  showSettings,
}) {
  const [currentVolume, setCurrentVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const audioReference = useRef(null);

  return (
    <>
      <MuteButton
        showSettings={showSettings}
        isMuted={isMuted}
        currentVolume={currentVolume}
        setIsMuted={setIsMuted}
        audioReference={audioReference}
      />
      <PlaySound
        isMuted={isMuted}
        experience={experience}
        audioTrigger={audioTrigger}
        currentVolume={currentVolume}
        audioReference={audioReference}
      />
      <audio ref={audioReference} />
    </>
  );
}
