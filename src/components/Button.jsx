import React from "react";

const Button = ({ type, handleSubmit }) => {
  return (
    <button type={type} onClick={handleSubmit}>
      <img src="./images/icon-arrow.svg" alt="Icon Down Arrow" />
    </button>
  );
};

export default Button;
