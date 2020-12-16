import React from "react";

const ButtonContainer = {
  marginTop: "40px",
};

const ButtonStyle = {
  backgroundColor: "red",
};

const Button = ({ setModal3Open }) => {
  return (
    <div style={ButtonContainer}>
      <button onClick={() => setModal3Open(true)} style={ButtonStyle}>
        Click Me
      </button>
    </div>
  );
};

export default Button;
