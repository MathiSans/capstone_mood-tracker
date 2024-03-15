import React, { useEffect, useState, useRef } from "react";

function Circle({ circleSize, name, colors }) {
  let circleStyle;

  if (colors.length === 1) {
    circleStyle = {
      width: circleSize,
      height: circleSize,
      borderRadius: "50%",
      backgroundColor: colors[0],
      margin: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: circleSize / 10,
    };
  } else if (colors.length > 1) {
    const gradient = `linear-gradient(to bottom, ${colors.join(",")})`;
    circleStyle = {
      width: circleSize,
      height: circleSize,
      borderRadius: "50%",
      background: gradient,
      margin: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: circleSize / 10,
    };
  }

  return <div style={circleStyle}>{name}</div>;
}

export default function App() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      setScreenSize({ width: containerWidth, height: containerHeight });
    };

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const objectsArray = [
    {
      name: "Schleswig-Holstein",
      radius: 120,
      colors: ["red", "blue"], // Example of an object with two colors
    },
    {
      name: "Hamburg",
      radius: 80,
      colors: ["yellow"], // Example of an object with one color
    },
    {
      name: "Bremen",
      radius: 20,
      colors: ["red", "blue", "yellow"], // Example of an object with three colors
    },
    {
      name: "Lower Saxony",
      radius: 100,
      colors: ["blue"], // Example of an object with one color
    },
    {
      name: "North Rhine-Westphalia",
      radius: 30,
      colors: ["red", "yellow"], // Example of an object with two colors
    },
    {
      name: "Hesse",
      radius: 35,
      colors: ["yellow", "blue"], // Example of an object with two colors
    },
    {
      name: "Rhineland-Palatinate",
      radius: 40,
      colors: ["red"], // Example of an object with one color
    },
    {
      name: "Baden-Württemberg",
      radius: 45,
      colors: ["blue"], // Example of an object with one color
    },
    {
      name: "Bavaria",
      radius: 50,
      colors: ["red", "blue", "yellow"], // Example of an object with three colors
    },
    {
      name: "Saarland",
      radius: 55,
      colors: ["yellow", "blue"], // Example of an object with two colors
    },
    {
      name: "Berlin",
      radius: 60,
      colors: ["red", "yellow"], // Example of an object with two colors
    },
    {
      name: "Brandenburg",
      radius: 65,
      colors: ["yellow"], // Example of an object with one color
    },
    {
      name: "Mecklenburg-Vorpommern",
      radius: 70,
      colors: ["red", "yellow"], // Example of an object with two colors
    },
    {
      name: "Saxony",
      radius: 75,
      colors: ["red", "blue"], // Example of an object with two colors
    },
    {
      name: "Saxony-Anhalt",
      radius: 90,
      colors: ["blue"], // Example of an object with one color
    },
    {
      name: "Thuringia",
      radius: 5,
      colors: ["red"], // Example of an object with one color
    },
  ];

  // Shuffle the array randomly
  const shuffledArray = [...objectsArray].sort(() => Math.random() - 0.5);

  const smallestDimension = Math.min(screenSize.width, screenSize.height);
  const maxCircleSize = smallestDimension / 2 - 10; // Adjust padding
  const circleSize = maxCircleSize / 80; // Scale factor

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "100vw",
  };

  return (
    <>
      <div ref={containerRef} style={gridStyle}>
        {shuffledArray.map((object, index) => (
          <Circle
            key={index}
            radius={object.radius}
            circleSize={object.radius * circleSize}
            name={object.name}
            colors={object.colors}
          />
        ))}
      </div>
    </>
  );
}
