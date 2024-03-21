import { useRef, useEffect } from "react";
import memory from "@/public/sounds/memory.mp3";

export default function PlaySound({
  audioTrigger,
  setCurrentVolume,
  currentVolume,
  page,
  isMuted,
}) {
  const audioReference = useRef(null);

  useEffect(() => {
    const audio = audioReference.current;
    if (audioTrigger && audio) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.play();
    }
  }, [page, audioTrigger, currentVolume, setCurrentVolume, isMuted]);

  return <audio ref={audioReference} src={memory} />;
}
