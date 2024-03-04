import * as S from "@/components/styled";

export default function Slider() {
  return (
    <>
      <S.Slider type="range" name="slider" min={0} max={255}></S.Slider>
    </>
  );
}
