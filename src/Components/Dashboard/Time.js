import React, { useState } from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <div className="currentTime">{currentTime}</div>
    </>
  );
};

export default Time;
