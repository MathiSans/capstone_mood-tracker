import { experiences } from "@/experiences";

// name function according to what it does
export default function GetIntensityValue({ value, experience }) {
  const selectedExperience = experiences.find((exp) => exp.name === experience);

  if (!experience) {
    return null;
  }

  const step = 1 / (selectedExperience.intensity.length - 1);
  let index = Math.floor(value / step);
  index = Math.min(index, selectedExperience.intensity.length - 1);

  return selectedExperience.intensity[index].name;
}
