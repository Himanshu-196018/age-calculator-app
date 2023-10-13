import React from "react";

const CalculatedAge = (props) => {
  let age = {
    years: "- -",
    months: "- -",
    days: "- -",
  };

  if (props.gotAge.length !== 0) {
    age.years = props.gotAge[0];
    age.months = props.gotAge[1];
    age.days = props.gotAge[2];
  }
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
