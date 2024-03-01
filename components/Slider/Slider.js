import { Slider } from "./Slider.styled";

export default function StyledSlider() {
  return (
    <>
      <Slider type="range" name="slider" min={0} max={255}></Slider>
    </>
  );
}
