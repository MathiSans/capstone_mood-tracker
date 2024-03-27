import { useEffect } from "react";
import neutral from "@/public/sounds/neutral.mp3";
import anger from "@/public/sounds/anger.mp3";
import fear from "@/public/sounds/fear.mp3";
import enjoyment from "@/public/sounds/enjoyment.mp3";
import disgust from "@/public/sounds/disgust.mp3";
import sadness from "@/public/sounds/sadness.mp3";

export default function PlaySound({
  isMuted,
  experience,
  audioTrigger,
  currentVolume,
  audioReference,
}) {
  const audio = audioReference.current;

  useEffect(() => {
    if (audioTrigger && isMuted === false && experience.length === 0) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.src = neutral;
      audio.play();
    }
    if (
      audio &&
      isMuted === false &&
      experience.some((exp) => exp.name === "anger")
    ) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.src = anger;
      audio.play();
    }
    if (
      audio &&
      isMuted === false &&
      experience.some((exp) => exp.name === "fear")
    ) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.src = fear;
      audio.play();
    }
    if (
      audio &&
      isMuted === false &&
      experience.some((exp) => exp.name === "enjoyment")
    ) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.src = enjoyment;
      audio.play();
    }
    if (
      audio &&
      isMuted === false &&
      experience.some((exp) => exp.name === "disgust")
    ) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.src = disgust;
      audio.play();
    }
    if (
      audio &&
      isMuted === false &&
      experience.some((exp) => exp.name === "sadness")
    ) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.src = sadness;
      audio.play();
    } else if (audio === undefined) {
      audio.pause();
    }
  }, [audio, isMuted, experience, audioTrigger, currentVolume]);

  return null;
}
