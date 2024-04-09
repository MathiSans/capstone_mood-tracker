import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

function EmotionAnalysis() {
  const [inputText, setInputText] = useState("");
  const [emotionResult, setEmotionResult] = useState("");
  const [language, setLanguage] = useState("en");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLanguageSelect = (event) => {
    console.log("event-Target", event.target.value);
    if (event.target.value == "english") {
      setLanguage("en");
    }
    if (event.target.value == "german") {
      setLanguage("de");
    }
    if (event.target.value == "espanol") {
      setLanguage("es");
    }
  };

  const handleSubmit = async () => {
    const url =
      "https://ekman-emotion-analysis.p.rapidapi.com/ekman-emotion?all=true";
    //?all=true for all emotions without filter
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "X-RapidAPI-Key": "d494478f31mshab8f5690c7d60c8p1f2035jsna0a331ad02cd",
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

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      //.text(); makes the response a string - to read the response body as plain text
      setEmotionResult(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ContainerFlex>
      <select id="language" onChange={handleLanguageSelect}>
        <option value="english">english</option>
        <option value="german">german</option>
        <option value="espanol">espanol</option>
      </select>
      <StyledTextarea
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="How do you feel right now?"
      />
      <button onClick={handleSubmit}>Analyze Emotion</button>
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
    </ContainerFlex>
  );
}

export default EmotionAnalysis;

const StyledTextarea = styled.textarea`
  height: 100px;
  width: 60%;
`;

const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
