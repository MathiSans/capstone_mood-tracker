export default function Intensity({ intensity }) {
  if (intensity <= 51) {
    return <span>very sad</span>;
  }
  if (intensity > 51 && intensity <= 102) {
    return <span>sad</span>;
  }
  if (intensity > 102 && intensity <= 153) {
    return <span>pleasant</span>;
  }
  if (intensity > 153 && intensity <= 255) {
    return <span>extremely good</span>;
  }
}
