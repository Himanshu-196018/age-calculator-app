import React, { useState } from "react";
import InputDate from "./InputDate";
import Button from "./Button";
import CalculatedAge from "./CalculatedAge";
import { validateDate, calculate } from "../scripts/functions";

const App = () => {
  // state for storing inputed date of birth
  let [date, setDate] = useState({
    day: { value: "", errorText: "" },
    month: { value: "", errorText: "" },
    year: { value: "", errorText: "" },
  });
  // state for storing age
  let [age, setAge] = useState(["- -", "- -", "- -"]);
  let [error, setError] = useState(false);

  // function to handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateDate(date, setDate)) {
      setError(false);
      setAge(calculate(date));
    } else {
      setError(true);
    }
  };

  return (
    <main>
      <form>
        <InputDate date={date} setDate={setDate} error={error} />
        <Button type={"submit"} handleSubmit={handleSubmit} />
      </form>
      <CalculatedAge gotAge={age} />
    </main>
  );
};

export default App;
