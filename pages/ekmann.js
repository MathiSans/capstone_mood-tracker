import React, { useState } from "react";
import styled from "styled-components";
import { Container, Page } from "@/components/Layout/Layout.styled";
import NavButton from "@/components/NavButton/NavButton";
import Circle from "@/components/Circle/Circle";
import { TbList } from "react-icons/tb";
import {
  CircleContainer,
  StyledTextarea,
  ContainerFlex,
  StyledH3,
} from "@/components/Ekmann/ekmann.styled";

require("dotenv").config();

function EmotionAnalysis() {
  const [formData, setFormData] = useState(Array(10).fill(""));
  const [emotionResult, setEmotionResult] = useState("");
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState(0);
  const [predictionsState, setPredictionsState] = useState(false);
  const [showList, setShowList] = useState(false);
  const [emptyFieldsError, setEmptyFieldsError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleLanguageSelect = (event) => {
  //   if (event.target.value == "english") {
  //     setLanguage("en");
  //   }
  //   if (event.target.value == "german") {
  //     setLanguage("de");
  //   }
  //   if (event.target.value == "espanol") {
  //     setLanguage("es");
  //   }
  // };

  const handleLanguageSelect = (event) => {
    setLanguage(event.target.options[event.target.selectedIndex].value);
  };
  const handleSubmit = async (event) => {
    // Check each field in formData for emptiness
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key].trim(); // Trim whitespace from value
        if (!value) {
          // If any field is empty, log error and exit early
          setEmptyFieldsError(
            `Field '${key}' is empty. Please enter some text in "EVERY" field.`
          );

          return;
        }
      }
    }
    event.preventDefault();
    //information to the used API
    //https://rapidapi.com/symanto-symanto-default/api/ekman-emotion-analysis
    //here you can log the data which is saved before it i processed very well
    const inputText = JSON.stringify(formData);
    console.log("inputText", inputText);
    const url =
      "https://ekman-emotion-analysis.p.rapidapi.com/ekman-emotion?all=true";
    //?all=true for all emotions without filter
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
        // "X-RapidAPI-Key": "d494478f31mshab8f5690c7d60c8p1f2035jsna0a331ad02cd",
        "X-RapidAPI-Host": "ekman-emotion-analysis.p.rapidapi.com",
      },
      body: JSON.stringify([
        {
          id: "1",
          language: language,
          text: inputText,
        },
      ]),
    };
    // Reset form after submission (optional)
    setFormData({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
    });
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      //.text(); makes the response a string - to read the response body as plain text
      setEmotionResult(result);
      setPredictionsState(true);
    } catch (error) {
      console.error(error);
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
      case "noemo":
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
        <select id="language" onChange={handleLanguageSelect}>
          <option value="en">english</option>
          <option value="de">german</option>
          <option value="es">espanol</option>
        </select>
        {page === 0 && (
          <StyledH3>
            Important! Please fill out all fields, otherwise the Analyzer does
            not work!
          </StyledH3>
        )}
        <p>
          {/* {page === 0 && question[0]}
          {page === 1 && question[1]}
          {page === 2 && question[2]}
          {page === 3 && question[3]}
          {page === 4 && question[4]}
          {page === 5 && question[5]}
          {page === 6 && question[6]}
          {page === 7 && question[7]}
          {page === 8 && question[8]}
          {page === 9 && question[9]} */}
          {question[page] && question[page]}
        </p>

        {page === 0 && (
          <StyledTextarea
            type="text"
            name="0"
            value={formData["0"]}
            onChange={handleChange}
            placeholder="write here..."
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
              required
            />
            <p>{emptyFieldsError}</p>
          </>
        )}

        {page !== 9 && (
          <NavButton
            handleClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            next
          </NavButton>
        )}
        {page === 9 && (
          <div>
            <NavButton handleClick={handleSubmit}>Analyze Emotion</NavButton>

            <TbList onClick={() => setShowList(!showList)} />
            {showList && (
              <div>
                {emotionResult && emotionResult[0].predictions && (
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
          </div>
        )}
        {predictionsState && (
          <CircleContainer>
            {transformedPredictions &&
              transformedPredictions.map((emotion, index) => (
                <Circle
                  key={index}
                  circleSize={emotion.probability * 500}
                  color={getColorForEmotion(emotion.prediction)}
                  name={emotion.prediction}
                />
              ))}
          </CircleContainer>
        )}
      </Page>
    </Container>
  );
}

export default EmotionAnalysis;
