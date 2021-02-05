import useInterval from "../react-useInterval";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { countingVotes } from "../store";

const Timer = () => {
  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState(0);
  const [timerOn, setTimer] = useState(false);

  useInterval(
    () => {
      if (timeLeft <= 0) {
        setTimer(false);
        console.log("Ding!");
        dispatch(countingVotes());
      } else {
        setTimeLeft(timeLeft - 1);
      }
    },
    timerOn ? 1000 : null
  );

  const handleStartTimer = (start) => {
    setTimeLeft(start);
    setTimer(true);
  };

  return (
    <div className="timer">
      <h1>{timeLeft} seconds to vote!</h1>
      <button onClick={() => handleStartTimer(10)}>Start Timer</button>
    </div>
  );
};

export default Timer;
