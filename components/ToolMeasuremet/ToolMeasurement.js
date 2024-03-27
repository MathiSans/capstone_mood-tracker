import { useEffect, useState } from "react";
import styled from "styled-components";

const ToolMeasurement = () => {
  const [meterValue, setMeterValue] = useState({});
  const [meter, setMeter] = useState([]);
  const [isBeforeTrue, setIsBeforeTrue] = useState(true);
  const [message, setMessage] = useState("");

  function handleOnChange(event) {
    setMeterValue(event.target.value);
    console.log("meterValue", meterValue);
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    setMeter([
      ...meter,
      {
        value: meterValue,
        isBeforeTrue: isBeforeTrue,
      },
    ]);
  }

  function handleBetterOrWorse() {
    const filteredArray = meter.filter((obj, index, arr) => {
      if (index >= arr.length - 2) {
        // Check if it's one of the last two objects
        return (
          (obj.flag === true && arr[arr.length - 2].flag === false) || // Check for true/false combination
          (obj.flag === false && arr[arr.length - 2].flag === true)
        );
      }
      return false;
    });
    // Check if filteredArray has at least two elements
    if (filteredArray.length >= 2) {
      const betterOrWorse = filteredArray[0].value < filteredArray[1].value;
      console.log("betterOrWorse", betterOrWorse);

      if (filteredArray[0] !== filteredArray[1] && betterOrWorse) {
        setMessage("You Improved your Mood");
      } else {
        setMessage("I wish you all the best");
      }
    } else {
      // Handle case when filteredArray doesn't have enough elements
      setMessage("Not enough data to compare");
    }
  }
  //   function handleBetterOrWorse() {
  //     // Filter the array for the last two objects with one true and one false flag
  //     const filteredArray = meter.filter((obj, index, arr) => {
  //       if (index >= arr.length - 2) {
  //         // Check if it's one of the last two objects
  //         return (
  //           (obj.flag === true && arr[arr.length - 2].flag === false) || // Check for true/false combination
  //           (obj.flag === false && arr[arr.length - 2].flag === true)
  //         );
  //       }
  //       return false;
  //     });
  //     console.log("filteredArray", filteredArray);

  //     const betterOrWorse = filteredArray[0].value < filteredArray[1].value;
  //     console.log("betterOrWorse", betterOrWorse);
  //     if ((filteredArray[0] !== filteredArray[1]) & betterOrWorse) {
  //       setMessage("You Improved your Mood");
  //     } else {
  //       setMessage("I wish you all the best");
  //     }
  //   }

  useEffect(() => {
    handleBetterOrWorse(); // Call handleBetterOrWorse when the component renders
  }, [meter]); // Add meter as a dependency so that handleBetterOrWorse is called when meter changes

  console.log("meter", meter);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="measure"></label>
        <Meter id="measure" type="range" onChange={handleOnChange}></Meter>
        <BigButton type="submit">subb it</BigButton>
        <button onClick={() => setIsBeforeTrue(!isBeforeTrue)}>change</button>
      </form>
      <P>you {message}</P>
    </div>
  );
};

const P = styled.p`
  position: absolute;
  top: 30rem;
  left: 20rem;
`;

const Meter = styled.input`
  position: absolute;
  top: 16rem;

  color: pink;
  background-color: lime;
  transform: rotate(-90deg);
  width: 200px;
`;

const BigButton = styled.button`
  width: 200px;
  height: 80px;
  background-color: pink;
  font-size: large;
  font-weight: bold;
  margin-left: 3rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

export default ToolMeasurement;
