import { useRef, useEffect, useState } from "react";
import IncreaseVolume from "./IncreaseVolume";

export default function PlaySound({ src, audioPlaying, pageIndex }) {
  const audioReference = useRef(null);
  const [currentVolume, setCurrentVolume] = useState(0);

  useEffect(() => {
    const audio = audioReference.current;
    if (audioPlaying && audio) {
      audio.volume = currentVolume;
      audio.play();
    }
  }, [audioPlaying, currentVolume]);

  return (
    <>
      <audio ref={audioReference} src={src} loop />
      <IncreaseVolume
        pageIndex={pageIndex}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
      />
    </>
  );
}
