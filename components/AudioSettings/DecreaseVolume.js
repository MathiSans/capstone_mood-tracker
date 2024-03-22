import { useEffect } from "react";

export default function VolumeFade({
  page,
  experience,
  currentVolume,
  setCurrentVolume,
  isMuted,
}) {
  useEffect(() => {
    if (currentVolume > 0 && experience.length === 0 && page === 2) {
      const decreaseVolume = setInterval(() => {
        setCurrentVolume((previousVolume) => {
          const newVolume = Math.max(0, previousVolume - 0.01);
          console.log("decreased:", newVolume);
          return newVolume;
        });
      }, 50);
      return () => clearInterval(decreaseVolume);
    }
  }, [page, experience, currentVolume, setCurrentVolume, isMuted]);
  return null;
}
