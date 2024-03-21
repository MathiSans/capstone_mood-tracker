import { useEffect } from "react";

export default function DecreaseVolume({
  page,
  currentVolume,
  setCurrentVolume,
  isMuted,
}) {
  useEffect(() => {
    if (currentVolume > 0 && page === 2) {
      const decreaseVolume = setInterval(() => {
        setCurrentVolume((previousVolume) =>
          Math.max(0, previousVolume - 0.01)
        );
      }, 50);
      return () => clearInterval(decreaseVolume);
    }
  }, [page, currentVolume, setCurrentVolume, isMuted]);
  return null;
}
