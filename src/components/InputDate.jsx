import React, { useState } from "react";
import Input from "./Input";

const InputDate = () => {
  const dateValue = [
    ["day", "DD"],
    ["month", "MM"],
    ["year", "YYYY"],
  ];

  let [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    console.log("hello");
  };

  return dateValue.map(([lt, pt]) => (
    <Input
      key={pt}
      labelText={lt}
      placeholderText={pt}
      inputValue={inputValue}
      handleChange={() => handleChange}
    />
  ));
};

export default InputDate;
