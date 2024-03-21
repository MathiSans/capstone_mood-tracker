import { useState } from "react";
import MuteButton from "./MuteButton";
import PlaySound from "./PlaySound";
import DecreaseVolume from "./DecreaseVolume";

export default function AudioSettings({ page, audioTrigger, setAudioTrigger }) {
  const [currentVolume, setCurrentVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <MuteButton
        page={page}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        setCurrentVolume={setCurrentVolume}
      />
      <PlaySound
        page={page}
        audioTrigger={audioTrigger}
        setAudioTrigger={setAudioTrigger}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
      />
      <DecreaseVolume
        page={page}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
        isMuted={isMuted}
      />
    </>
  );
}
