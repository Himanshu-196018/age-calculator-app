import React from "react";

const Input = ({ labelText, placeholderText, error, date, setDate }) => {
  const handleChange = (e) => {
    setDate({
      ...date,
      [e.target.id]: { ...date[e.target.id], value: e.target.value },
    });
  };

  return (
    <label htmlFor={labelText} className={error ? "error" : ""}>
      {labelText}
      <input
        id={labelText}
        name={labelText}
        type="number"
        placeholder={placeholderText}
        onChange={(e) => handleChange(e)}
      />
      <p>{date[labelText].errorText}</p>
    </label>
  );
};

export default Input;
