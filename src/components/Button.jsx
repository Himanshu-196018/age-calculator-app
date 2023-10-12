import React from "react";

const Button = ({ type, handleClick }) => {
  return (
    <button type={type} onClick={() => handleClick}>
      <img src="./images/icon-arrow.svg" alt="Icon Down Arrow" />
    </button>
  );
};

export default Button;
