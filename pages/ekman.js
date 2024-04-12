import React, { useState } from "react";
import { Container, Page } from "@/components/Layout/Layout.styled";
import NavButton from "@/components/NavButton/NavButton";
import Circle from "@/components/Circle/Circle";
import { TbList } from "react-icons/tb";
import {
  CircleContainer,
  StyledTextarea,
} from "@/components/EmotionTextAnalysis/EmotionTextAnalysis.styled";

function EmotionTextAnalysis() {
  const [formData, setFormData] = useState(Array(10).fill(""));
  const [emotionResult, setEmotionResult] = useState("");
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState(0);
  const [predictionsState, setPredictionsState] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLanguageSelect = (event) => {
    setLanguage(event.target.options[event.target.selectedIndex].value);
  };
  //information to the used API
  //   //https://rapidapi.com/symanto-symanto-default/api/ekman-emotion-analysis

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/analyze-emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, language: language }),
      });

      const data = await response.json();
      setEmotionResult(data); // Update state with API response
      console.log("emotionResult", emotionResult);
      setPredictionsState(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const question = [
    "1. What word describes your primary emotion right now?",
    "2. How would you describe that emotion?",
    "3. How does your body feel?",
    "4. Is there an event, person, place, or thing that might have caused this response?",
    "5. How did you react to that trigger?",
    "6. How will you respond now?",
    "7. Are you taking care of your physical well-being?",
    "8. What is on your mind today?",
    "9. What can you do to feel calmer?",
    "10. What are you grateful for today?",
  ];

  const predictions =
    emotionResult && emotionResult[0] && emotionResult[0].predictions;

  const transformedPredictions =
    predictions &&
    predictions[0] &&
    predictions.map((prediction) => {
      if (prediction.prediction === "noemo") {
        return { ...prediction, prediction: "no-emotion" };
      } else {
        return prediction;
      }
    });
  function getColorForEmotion(emotion) {
    switch (emotion) {
      case "joy":
        return "yellow";
      case "surprise":
        return "orange";
      case "sadness":
        return "blue";
      case "no-emotion":
        return "gray";
      case "fear":
        return "purple";
      case "anger":
        return "red";
      case "disgust":
        return "green";
      default:
        return "lightgrey"; // Default color for unknown emotions
    }
  }

  return (
    <Container>
      <Page>
        <h3>Emotion Text Analysis Tool</h3>
        <label htmlFor="language">
          language{"       "}
          <select id="language" onChange={handleLanguageSelect}>
            <option value="en">english</option>
            <option value="de">german</option>
            <option value="es">espanol</option>
          </select>{" "}
        </label>
        <p>{question[page] && question[page]}</p>
        {page === 10 && (
          <p>
            <TbList onClick={() => setShowList(!showList)} />
            <span onClick={() => setShowList(!showList)}>
              {showList ? "List-View" : "Circles-View"}
              {"   "}
            </span>
          </p>
        )}
        {page === 0 && (
          <StyledTextarea
            type="text"
            name="0"
            value={formData["0"]}
            onChange={handleChange}
            placeholder="write here..."
            required
          />
        )}
        {page === 1 && (
          <StyledTextarea
            type="text"
            name="1"
            value={formData["1"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 2 && (
          <StyledTextarea
            type="text"
            name="2"
            value={formData["2"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 3 && (
          <StyledTextarea
            type="text"
            name="3"
            value={formData["3"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 4 && (
          <StyledTextarea
            type="text"
            name="4"
            value={formData["4"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 5 && (
          <StyledTextarea
            type="text"
            name="5"
            value={formData["5"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 6 && (
          <StyledTextarea
            type="text"
            name="6"
            value={formData["6"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 7 && (
          <StyledTextarea
            type="text"
            name="7"
            value={formData["7"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 8 && (
          <StyledTextarea
            type="text"
            name="8"
            value={formData["8"]}
            onChange={handleChange}
            placeholder="write here..."
          />
        )}
        {page === 9 && (
          <>
            <StyledTextarea
              type="text"
              name="9"
              value={formData["9"]}
              onChange={handleChange}
              placeholder="write here..."
            />
          </>
        )}
        {page !== 9 && page !== 10 && (
          <NavButton
            handleClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            next
          </NavButton>
        )}
        {page === 9 && (
          <NavButton
            handleClick={(event) => {
              page !== 10 && handleSubmit(event);
              setPage((currPage) => currPage + 1);
            }}
          >
            Analyze Emotion
          </NavButton>
        )}
        {page === 10 && (
          <>
            {showList && (
              <div>
                {emotionResult &&
                  emotionResult[0] &&
                  emotionResult[0].predictions && (
                    <div>
                      Emotion Result:
                      <ul>
                        {emotionResult[0].predictions.map((emotion, index) => (
                          <li key={index}>
                            {emotion.prediction}: {emotion.probability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            )}
          </>
        )}
        {predictionsState && !showList && (
          <>
            <CircleContainer>
              {transformedPredictions &&
                transformedPredictions.map((emotion, index) => (
                  <Circle
                    key={index}
                    circleSize={emotion.probability * 500}
                    color={getColorForEmotion(emotion.prediction)}
                    name={emotion.prediction}
                    ekmanPage={true}
                    percentage={Math.floor(emotion.probability * 100)}
                  />
                ))}
            </CircleContainer>
            <NavButton
              handleClick={() => alert("Thank you for choosing our tool!")}
            >
              Finish
            </NavButton>
          </>
        )}
      </Page>
    </Container>
  );
}

export default EmotionTextAnalysis;
