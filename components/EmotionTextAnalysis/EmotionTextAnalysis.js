import React, { useState } from "react";
import { Page } from "@/components/Layout/Layout.styled";
import NavButton from "@/components/NavButton/NavButton";
import Circle from "@/components/Circle/Circle";
import { TbList } from "react-icons/tb";
import {
  CircleContainer,
  StyledTextarea,
  StyledQuestion,
  TextAnalysisContainer,
  StyledLabel,
} from "@/components/EmotionTextAnalysis/EmotionTextAnalysis.styled";
import { questions } from "@/components/EmotionTextAnalysis/EmotionTextAnalysisQuestions";

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
      setPredictionsState(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const predictions = emotionResult?.[0]?.predictions;

  const transformedPredictions =
    predictions?.map((prediction) => {
      return prediction.prediction === "noemo"
        ? { ...prediction, prediction: "no-emotion" }
        : prediction;
    }) ?? [];
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
    <TextAnalysisContainer showList={showList}>
      <Page emotionTextAnalysis={true}>
        <h3>Emotion Text Analysis Tool</h3>
        <StyledLabel
          showList={showList}
          predictionsState={predictionsState}
          htmlFor="language"
        >
          language{"       "}
          <select id="language" onChange={handleLanguageSelect}>
            <option value="en">english</option>
            <option value="de">german</option>
            <option value="es">espanol</option>
          </select>{" "}
        </StyledLabel>
        <StyledQuestion>{questions[page] && questions[page]}</StyledQuestion>
        {page === 10 && (
          <p>
            <TbList onClick={() => setShowList(!showList)} />
            <span onClick={() => setShowList(!showList)}>
              {showList ? "List-View" : "Circles-View"}
              {"   "}
            </span>
          </p>
        )}

        {page >= 0 && page <= 9 && (
          <StyledTextarea
            type="text"
            name={page.toString()}
            value={formData[page.toString()]}
            onChange={handleChange}
            placeholder="write here..."
            required={page === 0}
          />
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
                {emotionResult?.[0]?.predictions && (
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
              {transformedPredictions?.map((emotion, index) => (
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
          </>
        )}
      </Page>
    </TextAnalysisContainer>
  );
}

export default EmotionTextAnalysis;
