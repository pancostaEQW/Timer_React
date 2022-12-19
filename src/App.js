// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./App.css";
import FlexController from "./FlexController";
import Timer from "./Timer";

function App() {
  const [time, setTime] = useState(2 * 60);
  const [count, setCount] = useState(false);
  const [flex, setFlex] = useState(true);

  const activate = () => {
    if (flex === "flex") setFlex("none");
    if (flex === "none") setFlex("flex");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      count && setTime((time) => (time >= 1 ? time - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const getPadTimer = (time) => time.toString().padStart(2, "0");

  const minutes = getPadTimer(Math.floor(time / 60));
  const second = getPadTimer(time - minutes * 60);

  const handleStart = () => {
    setCount(true);
  };
  const handleStop = () => {
    setCount(false);
  };
  const handleReset = () => {
    setCount(false);
    setTime(2 * 60);
  };

  let ind = 1;

  return (
    <div className="wrapper">
      <div className="border-bottom"></div>
      <header className="header">
        <div className="header__container">
          <h1 className="header-strong-text">
            Ход торгов
            <strong>
              Тестовые торги на аппарате ЛОТОС №1 (15.12.2022 9:00)
            </strong>
          </h1>
          <h2 className="header-text">
            Уважаемые участники, во время вашего хода вы можете изменить
            параметры торгов, указанных в таблице:
          </h2>
        </div>
      </header>
      <main className="main">
        <section className="do">
          <div className="do__container">
            <div className="do_content-and-timer">
              <div className="box-hod-and-params">
                <div className="hod">ХОД</div>
                <div className="params">ПАРАМЕТРЫ И ТРЕБОВАНИЯ</div>
              </div>
              <div className="timers">
                <Timer
                  flex={flex}
                  minutes={minutes}
                  second={second}
                  handleReset={handleReset}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  ind={ind++}
                />
                <Timer
                  flex={flex}
                  minutes={minutes}
                  second={second}
                  handleReset={handleReset}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  ind={ind++}
                />
                <Timer
                  flex={flex}
                  minutes={minutes}
                  second={second}
                  handleReset={handleReset}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  ind={ind++}
                />
                <Timer
                  flex={flex}
                  minutes={minutes}
                  second={second}
                  handleReset={handleReset}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  ind={ind++}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
