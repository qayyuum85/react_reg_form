import React from "react";

const Greetings = () => {
  return (
    <div>
      <h1>Greetings, the time now is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default Greetings;
