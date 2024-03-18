import styled from "styled-components";
// import "./AverageEmotion.css";

const getEmotionColor = (emotion) => {
  const colorMap = {
    neutral: "grey",
    happy: "orange",
    angry: "red",
    sad: "blue",
    fearful: "mediumorchid",
    disgusted: "green",
    surprised: "lightblue",
    // Add more emotions and colors as needed
  };

  return colorMap[emotion] || "grey"; // Default to grey if the emotion is not in the map
};
const getEmotionTextColor = (emotion) => {
  const colorMap = {
    neutral: "black",
    happy: "black",
    angry: "yellow",
    sad: "Black",
    fearful: "yellow",
    disgusted: "black",
    surprised: "black",
    // Add more emotions and colors as needed
  };

  return colorMap[emotion] || "grey"; // Default to grey if the emotion is not in the map
};

// eslint-disable-next-line react/prop-types
const EmotionAnalysisComponent = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    console.error("Invalid or missing data.");

    // Handle the error or return early if necessary.
  }

  // Initialize objects to store sums and counts for each emotion
  const sumEmotions = {
    neutral: 0,
    happy: 0,
    sad: 0,
    angry: 0,
    fearful: 0,
    disgusted: 0,
    surprised: 0,
  };
  const countEmotions = {
    neutral: 0,
    happy: 0,
    sad: 0,
    angry: 0,
    fearful: 0,
    disgusted: 0,
    surprised: 0,
  };

  // Iterate through the data array
  // eslint-disable-next-line react/prop-types
  data.forEach((entry) => {
    Object.keys(entry.experiences).forEach((emotion) => {
      // Add the value to the sum
      sumEmotions[emotion] += entry.experiences[emotion];
      // Increment the count
      countEmotions[emotion]++;
    });
  });

  // Calculate the average for each emotion
  const averageEmotions = {};
  Object.keys(sumEmotions).forEach((emotion) => {
    averageEmotions[emotion] = sumEmotions[emotion] / countEmotions[emotion];
  });

  const averageEmotionsRounded = {};
  Object.keys(sumEmotions).forEach((emotion) => {
    // Round to 2 decimal places
    averageEmotionsRounded[emotion] = +(
      sumEmotions[emotion] / countEmotions[emotion]
    ).toFixed(2);
  });

  console.log("Average Emotions:", averageEmotions);
  console.log("averageEmotionsRounded:", averageEmotionsRounded);

  return (
    <>
      <div>
        {/* Render the rounded average values */}
        <h3>Average Rounded Emotions for 20object with a 1000ms fetch</h3>
        <ul>
          {Object.keys(averageEmotionsRounded).map((emotion) => (
            <>
              <li key={emotion}>
                {emotion}: {averageEmotionsRounded[emotion]}
              </li>
              <div>
                <StyledEmotionCircle
                  value={averageEmotionsRounded[emotion]}
                  emotion={emotion}
                >
                  <StyledSpan
                    value={averageEmotionsRounded[emotion]}
                    emotion={emotion}
                  >
                    {emotion}
                  </StyledSpan>
                </StyledEmotionCircle>
              </div>
            </>
          ))}
        </ul>
        <div>
          <StyledEmotionCircle>
            <StyledSpan>Enjoyment</StyledSpan>
          </StyledEmotionCircle>
        </div>
      </div>
    </>
  );
};

const StyledEmotionCircle = styled.div`
  border-radius: 50%;
  background-color: ${(props) => getEmotionColor(props.emotion)};
  border: black;
  width: ${(props) => props.value * 400}px;
  height: ${(props) => props.value * 400}px;
  position: relative;
`;

const StyledSpan = styled.span`
  position: absolute;
  font-size: ${(props) => props.value * 50}px;
  top: 42%;
  font-weight: bold;
  right: 10%;
  color: ${(props) => getEmotionTextColor(props.emotion)};
`;

export default EmotionAnalysisComponent;
