import React from "react";

const Input = ({
  labelText,
  placeholderText,
  errorText,
  inputValue,
  handleChange,
}) => {
  return (
    <label htmlFor={labelText}>
      {labelText}
      <input
        id={labelText}
        name={labelText}
        type="number"
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleChange}
      />
      <p>{errorText}</p>
    </label>
  );
};

export default Input;
