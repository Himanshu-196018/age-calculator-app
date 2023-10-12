import React from "react";
import Input from "./Input";

const InputDate = () => {
  const dateValue = [
    ["day", "DD", "Must be a valid day"],
    ["month", "MM", "Must be a valid month"],
    ["year", "YYYY", "Must be in past"],
  ];

  return dateValue.map(([lt, pt, et]) => (
    <Input
      key={pt}
      labelText={lt}
      placeholderText={pt}
      errorText={et}
      error={false}
    />
  ));
};

export default InputDate;
