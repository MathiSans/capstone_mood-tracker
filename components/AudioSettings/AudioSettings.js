import { useState, useRef } from "react";
import MuteButton from "./MuteButton";
import PlaySound from "./PlaySound";
import DecreaseVolume from "./DecreaseVolume";

export default function AudioSettings({
  page,
  experience,
  audioTrigger,
  setAudioTrigger,
}) {
  const [currentVolume, setCurrentVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const audioReference = useRef(null);

  return (
    <>
      <MuteButton
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        setCurrentVolume={setCurrentVolume}
        audioReference={audioReference}
      />
      <PlaySound
        experience={experience}
        audioTrigger={audioTrigger}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
        audioReference={audioReference}
      />
      <DecreaseVolume
        page={page}
        experience={experience}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
        isMuted={isMuted}
      />
      <audio ref={audioReference} />
    </>
  );
}
