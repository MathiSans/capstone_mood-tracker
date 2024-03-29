export default function locationAnalyser({ data }) {
  let locationMap = {};
  let totalCount = 0;

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  data.forEach((entry) => {
    const { region, city } = entry.location;

    if (!locationMap[region]) {
      locationMap[region] = {
        count: 1,
        cities: [city],
        color: getRandomColor(),
      };
    } else {
      locationMap[region].count++;
      if (!locationMap[region].cities.includes(city)) {
        locationMap[region].cities.push(city);
      }
    }
    totalCount++;
  });

  let result = [];

  for (const region in locationMap) {
    result.push({
      region,
      cities: locationMap[region].cities,
      count: locationMap[region].count,
      color: locationMap[region].color,
    });
  }

  return [result, { totalCount: totalCount }];
}
