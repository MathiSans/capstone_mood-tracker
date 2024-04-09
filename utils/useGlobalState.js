import { useState } from "react";

export const useGlobalState = () => {
  const [currentVolume, setCurrentVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [audioReference, setAudioReference] = useState(null);
  console.log(typeof setIsMuted);

  return {
    currentVolume,
    setCurrentVolume,
    isMuted,
    setIsMuted,
    audioReference,
    setAudioReference,
  };
};
