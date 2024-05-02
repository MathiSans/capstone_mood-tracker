import { useRef, useEffect, useState } from "react";
import * as Styled from "./SmileTrainerWrapper.styled";
import * as faceapi from "face-api.js";
import { nanoid } from "nanoid";
import SmileTrainer from "./SmileTrainer/SmileTrainer";

export default function SmileTrainerWrapper() {
  const [emotionsArray, setEmotionsArray] = useState([]);
  const [facesDetected, setFacesDetected] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();
  const expressionsRef = useRef({});

  useEffect(() => {
    startVideo();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      loadModels();
    }
  }, [videoRef]);

  function startVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
        videoRef.current.onloadedmetadata = () => {
          loadModels();
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function loadModels() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  }

  function faceMyDetect() {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const facesAreDetected = detections.length > 0;
      setFacesDetected(facesAreDetected);

      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        expressionsRef.current = expressions;
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
    }, 1000);
  }

  return (
    <>
      <Styled.DisclaimerText>
        we are looking at your face and estimate your current emotions
      </Styled.DisclaimerText>
      <Styled.HiddenDiv>
        <Styled.HiddenVideo
          crossOrigin="anonymous"
          ref={videoRef}
          autoPlay
        ></Styled.HiddenVideo>
      </Styled.HiddenDiv>
      <Styled.HiddenCanvas
        ref={canvasRef}
        width="0"
        height="0"
        className="appcanvas"
      />

      <SmileTrainer
        smileThreshold={expressionsRef.current.happy}
        facesDetected={facesDetected}
      />
    </>
  );
}
