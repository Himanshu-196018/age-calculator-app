import React from "react";
import Input from "./Input";

const InputDate = ({ date, setDate, error }) => {
  const dateValue = [
    ["day", "DD"],
    ["month", "MM"],
    ["year", "YYYY"],
  ];

  return dateValue.map(([lt, pt]) => (
    <Input
      key={pt}
      labelText={lt}
      placeholderText={pt}
      error={error}
      date={date}
      setDate={setDate}
    />
  ));
};

export default InputDate;
