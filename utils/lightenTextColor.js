export default function lightenColor(color, percent) {
  // Convert HEX to RGB
  let [r, g, b] = color.match(/\w\w/g).map((x) => parseInt(x, 16));

  // Increase brightness by percentage
  r = Math.min(255, Math.round(r * (1 + percent)));
  g = Math.min(255, Math.round(g * (1 + percent)));
  b = Math.min(255, Math.round(b * (1 + percent)));

  // Convert RGB back to HEX
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
