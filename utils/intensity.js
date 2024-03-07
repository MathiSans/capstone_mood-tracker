export default function Intensity({ value, experience }) {
  const step = 1 / (experience.length - 1);
  let index = Math.floor(value / step);
  index = Math.min(index, experience.length - 1);
  return [experience[index].name];
}
