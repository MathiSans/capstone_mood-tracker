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
    const playAudio = (src) => {
      if (!isMuted) {
        audio.volume = currentVolume;
        audio.loop = true;
        audio.src = src;
        audio.play();
      }
    };

    if (audioTrigger && !isMuted && experience.length === 0) {
      playAudio(neutral);
    }

    // no key/value pair needed
    const experienceMap = {
      anger: anger,
      fear: fear,
      enjoyment: enjoyment,
      disgust: disgust,
      sadness: sadness,
    };

    experience.forEach((exp) => {
      if (experienceMap[exp.name]) {
        playAudio(experienceMap[exp.name]);
      }
    });

    if (audio === undefined) {
    }
  }, [audio, isMuted, experience, audioTrigger, currentVolume]);

  return null;
}
