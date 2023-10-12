import React from "react";

const CalculatedAge = (props) => {
  const age = {
    years: "- -",
    months: "- -",
    days: "- -",
  };

  return (
    <div className="calc-age">
      <p>
        <span className="purple-txt">{age.years}</span> years
      </p>
      <p>
        <span className="purple-txt">{age.months}</span> months
      </p>
      <p>
        <span className="purple-txt">{age.days}</span> days
      </p>
    </div>
  );
};

export default CalculatedAge;
