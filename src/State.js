import React, { useState } from "react";

const StateComponent = () => {
  const [isYellow, setIsYellow] = useState(true);

  return (
    <h1
      onClick={() => setIsYellow(!isYellow)}
      style={{ color: isYellow ? "yellow" : "cyan" }}
    >
      This Changes Colour on Click. (Example of useState Hook)
    </h1>
  );
};
