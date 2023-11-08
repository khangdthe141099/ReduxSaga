import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState<number>(10);

  const minutes = Math.floor(time / 60);
  const second = time % 60;

  useEffect(() => {
    const timmer = localStorage.getItem("timmer");

    if (timmer) {
      setTime(Number(timmer));
    }
  }, []);

  useEffect(() => {
    if (time > -1) {
      const intervalId = setInterval(() => {
        setTime(time - 1);

        localStorage.setItem("timmer", (time - 1).toString());
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setTime(10);
    }
  }, [time]);

  const handleRestart = () => {
    setTime(10);
  };

  return (
    <div>
      <div>
        {minutes.toString().padStart(2, "0")}:
        {second.toString().padStart(2, "0")}
      </div>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default Timer;
