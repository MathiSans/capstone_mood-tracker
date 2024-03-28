import { useState } from "react";
import styled from "styled-components";
// import QuotesPage from "@/pages/tools/quotes";

const ToolMeasurement = ({ page, setPage }) => {
  const [before, setBefore] = useState(0);
  const [after, setAfter] = useState(0);

  function handleOnChange(event) {
    if (page === 0) {
      setBefore(event.target.value);
    } else {
      setAfter(event.target.value);
    }
  }

  return (
    <div>
      <BigButton
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        Next
      </BigButton>
      {(page === 0 || page === 2) && (
        <Meter
          id="measure"
          type="range"
          onChange={(event) => handleOnChange(event)}
        ></Meter>
      )}

      {page === 3 && (
        <P>
          {before - after < 0 ? "Your mood increased" : "Your mood decreased"}
        </P>
      )}
    </div>
  );
};
// before: 40 after: 60 = 40-60=-20
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
