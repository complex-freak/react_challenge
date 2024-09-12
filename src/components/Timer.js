import { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    const timerId = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setTimerId(timerId);
  };
  const stopTimer = () => {
    clearInterval(timerId);
  };
  const resetTimer = () => {
    clearInterval(timerId);
    setTimer(0);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
