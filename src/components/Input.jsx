import React, { useState } from "react";

const Input = ({ labelText, placeholderText, errorText, error }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <label htmlFor={labelText} className={error ? "error" : ""}>
      {labelText}
      <input
        id={labelText}
        name={labelText}
        type="number"
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>{error ? errorText : ""}</p>
    </label>
  );
};

export default Input;
