import React, { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";
import Clock from "react-clock";

const ClockWatch = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  );
};

export default ClockWatch;
