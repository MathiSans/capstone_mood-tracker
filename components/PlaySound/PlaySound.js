import { useRef, useEffect, useState } from "react";
import DecreaseVolume from "./DecreaseVolume";

export default function PlaySound({ src, play, pageIndex }) {
  const audioReference = useRef(null);
  const [currentVolume, setCurrentVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioReference.current;
    if (play && audio) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.play();
    }
  }, [play, currentVolume]);

  return (
    <>
      <audio ref={audioReference} src={src} />
      <DecreaseVolume
        pageIndex={pageIndex}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
      />
    </>
  );
}
