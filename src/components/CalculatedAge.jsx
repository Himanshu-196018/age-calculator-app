import React from "react";

const CalculatedAge = ({ gotAge }) => {
  return (
    <div className="calc-age">
      <p>
        <span className="purple-txt">{gotAge[0]}</span> years
      </p>
      <p>
        <span className="purple-txt">{gotAge[1]}</span> months
      </p>
      <p>
        <span className="purple-txt">{gotAge[2]}</span> days
      </p>
    </div>
  );
};

export default CalculatedAge;
