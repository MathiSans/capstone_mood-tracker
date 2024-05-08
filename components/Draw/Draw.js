import { useState, useRef, useEffect } from "react";
import {
  ButtonContainer,
  StyledCanvas,
  DrawContainer,
  StyledH2Text,
} from "./Draw.styled";
import NavButton from "../NavButton/NavButton";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const startPosition = (event) => {
      setIsDrawing(true);
      const { offsetX, offsetY } = getOffset(event);
      setPrevPos({ x: offsetX, y: offsetY });
    };

    const endPosition = () => {
      setIsDrawing(false);
    };

    const draw = (event) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = getOffset(event);
      context.beginPath();
      context.moveTo(prevPos.x, prevPos.y);
      context.lineTo(offsetX, offsetY);
      context.stroke();
      setPrevPos({ x: offsetX, y: offsetY });
    };

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startPosition);
      canvas.removeEventListener("mouseup", endPosition);
      canvas.removeEventListener("mousemove", draw);
    };
  }, [isDrawing, prevPos]);

  const getOffset = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvasAsImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "drawing.jpg";

    // Wait for the canvas to be fully rendered
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.click();
      URL.revokeObjectURL(url); // Clean up the URL object
    });
  };

  return (
    <DrawContainer>
      <StyledH2Text>Doodle it out!</StyledH2Text>
      <StyledCanvas
        ref={canvasRef}
        width={350}
        height={400}
        style={{ border: "1px solid #000" }}
      ></StyledCanvas>
      <ButtonContainer>
        <NavButton handleClick={clearCanvas}>Clear</NavButton>
        <NavButton handleClick={saveCanvasAsImage}>Save as JPG</NavButton>
      </ButtonContainer>
    </DrawContainer>
  );
};

export default DrawingCanvas;
