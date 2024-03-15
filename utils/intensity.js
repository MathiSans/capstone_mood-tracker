import { experiences } from "@/experiences";

export default function Intensity({ value, experience }) {
  const selectedExperience = experiences.find((exp) => exp.name === experience);

  if (!experience) {
    return null;
  }

  const step = 1 / (selectedExperience.intensity.length - 1);
  let index = Math.floor(value / step);
  index = Math.min(index, selectedExperience.intensity.length - 1);

  return selectedExperience.intensity[index].name;
}
