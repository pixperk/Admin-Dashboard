import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (timeInSec: number) => {
  const hours = String(Math.floor(timeInSec / 3600));
  const minutes = String(Math.floor((timeInSec % 3600) / 60));
  const seconds = String(timeInSec % 60);

  return `${hours.padStart(2, "0")}:${minutes.padStart(
    2,
    "0"
  )}:${seconds.padStart(2, "0")}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalID: number;
    if (isRunning) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning]);

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="dashboardAppContainer">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
