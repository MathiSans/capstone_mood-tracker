import {
  Circle,
  Diamond,
  Star,
  Cross,
  SquareDonut,
  Arrow,
} from "react-awesome-shapes";

export default function AwesomeShapesProvider() {
  const ShapeComponentMap = [Circle, Diamond, Star, Cross, SquareDonut, Arrow];

  const randomIndex = Math.floor(Math.random() * ShapeComponentMap.length);

  const Component = ShapeComponentMap[randomIndex];

  function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const color1 = getRandomHexColor();
  const color2 = getRandomHexColor();

  return (
    <Component
      color={`linear-gradient(135deg, ${color1}, ${color2})`}
      size={"200px"}
      zIndex={1}
      position="relative"
    />
  );
}
