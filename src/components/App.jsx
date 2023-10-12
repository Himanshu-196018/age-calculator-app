import React, { useState } from "react";
import InputDate from "./InputDate";
import Button from "./Button";
import CalculatedAge from "./CalculatedAge";

const App = () => {
  const emptyDate = {
    day: "",
    month: "",
    year: "",
  };
  let [date, setDate] = useState(emptyDate);
  let [validDate, setValidDate] = useState(emptyDate);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <form>
        <InputDate />
        <Button type={"submit"} handleSubmit={() => handleSubmit} />
      </form>
      <CalculatedAge />
    </main>
  );
};

export default App;
