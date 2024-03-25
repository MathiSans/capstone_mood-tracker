import { useEffect } from "react";
import neutral from "@/public/sounds/neutral.mp3";
import anger from "@/public/sounds/anger.mp3";
import fear from "@/public/sounds/fear.mp3";
import enjoyment from "@/public/sounds/enjoyment.mp3";
import disgust from "@/public/sounds/disgust.mp3";
import sadness from "@/public/sounds/sadness.mp3";

export default function PlaySound({
  page,
  isMuted,
  experience,
  audioTrigger,
  currentVolume,
  audioReference,
}) {
  const audio = audioReference.current;

  useEffect(() => {
    console.log("Page Index:", page);
    if (audioTrigger && audio && page === 1 && !isMuted) {
      audio.volume = currentVolume;
      audio.loop = true;
      audio.src = neutral;
      audio.play();
    }
    if (audio && experience.some((exp) => exp.name === "anger") && !isMuted) {
      audio.volume = currentVolume;
      audio.src = anger;
      audio.loop = true;
      audio.play();
    }
    if (audio && experience.some((exp) => exp.name === "fear") && !isMuted) {
      audio.volume = currentVolume;
      audio.src = fear;
      audio.loop = true;
      audio.play();
    }
    if (
      audio &&
      experience.some((exp) => exp.name === "enjoyment") &&
      !isMuted
    ) {
      audio.volume = currentVolume;
      audio.src = enjoyment;
      audio.loop = true;
      audio.play();
    }
    if (audio && experience.some((exp) => exp.name === "disgust") && !isMuted) {
      audio.volume = currentVolume;
      audio.src = disgust;
      audio.loop = true;
      audio.play();
    }
    if (audio && experience.some((exp) => exp.name === "sadness") && !isMuted) {
      audio.volume = currentVolume;
      audio.src = sadness;
      audio.loop = true;
      audio.play();
    }
    if (experience.some((exp) => exp.name === "") && !isMuted) {
      audio.pause();
    }
  }, [page, audio, isMuted, experience, currentVolume, audioTrigger]);

  return null;
}
