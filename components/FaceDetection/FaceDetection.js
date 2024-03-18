import { useRef, useEffect, useState } from "react";
// import "../FaceDetection/FaceDetection.css";
import * as faceapi from "face-api.js";
import { nanoid } from "nanoid";
import styled from "styled-components";
// import { averageEmotions } from "../components/AverageEmotionValue";
// import { averageEmotionsRounded } from "../components/AverageEmotionValue";
import EmotionAnalysisComponent from "@/components/FaceDetection/AverageEmotion";
import SmileTrainer from "@/components/FaceDetection/SmileTrainer";

function FaceDetection() {
  // const [emotions, setEmotions] = useState([]);
  const [facesDetected, setFacesDetected] = useState(false);

  const [emotionsArray, setEmotionsArray] = useState([]);
  const videoRef = useRef();
  const canvasRef = useRef();
  //EXPRESSION REF
  const expressionsRef = useRef({});

  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  // OPEN YOU FACE WEBCAM
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // LOAD MODELS FROM FACE API

  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      // Check if faces are detected
      const facesAreDetected = detections.length > 0;
      // Update state to reflect whether faces are detected or not
      setFacesDetected(facesAreDetected);

      //SAVE TO ARRAY OF 20 objects
      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        expressionsRef.current = expressions;
        // Use the functional form of setEmotionsArray to correctly update based on the previous state
        setEmotionsArray((prevEmotionsArray) => {
          const newEmotionsArray = [
            ...prevEmotionsArray.slice(-100 + 1),
            {
              id: nanoid(),
              experiences: expressions,
            },
          ];
          return newEmotionsArray;
        });
        expressionsRef.current = expressions;
      }

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: 846,
        height: 585,
      });

      const resized = faceapi.resizeResults(detections, {
        width: 846,
        height: 585,
      });

      faceapi.draw.drawDetections(canvasRef.current, resized);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    }, 200);
  };
  console.log("emotionArray", emotionsArray);
  // console.log("averageEmotions", averageEmotions);
  // console.log("averageEmotionsRounded", averageEmotionsRounded);
  return (
    <StyledMyAppDivContainer>
      <h1>Facial Expression Detection</h1>
      <StyledAppVideo>
        <VideoHidden
          crossOrigin="anonymous"
          ref={videoRef}
          autoPlay
        ></VideoHidden>
      </StyledAppVideo>
      <StyledAppCanvas
        ref={canvasRef}
        width="940"
        height="650"
        className="appcanvas"
      />
      <StyledEmotionsBox>
        {/* Display each key-value pair in a separate <span> */}
        {Object.keys(expressionsRef.current).map((key) => (
          <span className="keyValueSpan" key={nanoid()}>
            {key}: {expressionsRef.current[key]},{" "}
          </span>
        ))}
      </StyledEmotionsBox>
      {facesDetected ? (
        <SmileTrainer x={expressionsRef} />
      ) : (
        <StyledNoFaceDetected>NO FACE DETECTED</StyledNoFaceDetected>
      )}
      {facesDetected ? (
        <EmotionAnalysisComponent data={emotionsArray} />
      ) : (
        <StyledNoFaceDetected>NO FACE DETECTED</StyledNoFaceDetected>
      )}
    </StyledMyAppDivContainer>
  );
}

const StyledNoFaceDetected = styled.p`
  background-color: red;
  color: white;
  font-size: 17px;
  font-weight: bold;
  padding: 1rem;
  border: 2px dotted yellow;
`;

const VideoHidden = styled.video`
  visibility: hidden;
`;

const StyledAppVideo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAppCanvas = styled.canvas`
  visibility: hidden;
  position: absolute;
  top: 100px;
`;

const StyledEmotionsBox = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const StyledMyAppDivContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default FaceDetection;
