import React, { useState } from "react";
import FlexController from "./FlexController";

export default function Timer({
  minutes,
  second,
  handleStart,
  handleStop,
  handleReset,
  ind,
}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <div
        className="timer"
        style={{ display: `${isVisible ? "flex" : "none"}` }}
      >
        <span className="time">
          {minutes}:{second}
        </span>
        <button className="button" onClick={handleStart}>
          start
        </button>
        <button className="button" onClick={handleStop}>
          stop
        </button>
        <button className="button" onClick={handleReset}>
          reset
        </button>
      </div>
      <FlexController
        isVisible={isVisible}
        activate={() => setIsVisible(!isVisible)}
      >
        Участник № {ind}
      </FlexController>
    </div>
  );
}
