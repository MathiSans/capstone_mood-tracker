export default function ExperienceAnalyser(data) {
  const experienceMap = {};
  data.forEach((entry) => {
    if (!experienceMap[entry.experience]) {
      experienceMap[entry.experience] = {
        count: 1,
        totalIntensity: entry.intensity,
        color: entry.color,
      };
    } else {
      experienceMap[entry.experience].count++;
      experienceMap[entry.experience].totalIntensity += entry.intensity;
    }
  });

  const result = [];

  for (const experience in experienceMap) {
    const averageIntensity =
      experienceMap[experience].totalIntensity /
      experienceMap[experience].count;
    result.push({
      experience,
      averageIntensity,
      color: experienceMap[experience].color,
      count: experienceMap[experience].count,
    });
  }

  return result;
}
