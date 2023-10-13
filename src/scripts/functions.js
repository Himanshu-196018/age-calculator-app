// important functions

/************************************************
 * Function to validate Date
 ***********************************************/
const validateDate = (date, setDate) => {
  let isValid = true;

  if (date.year.value === "") {
    setDate({
      ...date,
      year: { ...date.year, errorText: "This field is required" },
    });
    isValid = false;
  }

  if (date.month.value === "") {
    setDate({
      ...date,
      month: { ...date.month, errorText: "This field is required" },
    });
    isValid = false;
  }

  if (date.day.value === "") {
    setDate({
      ...date,
      day: { ...date.day, errorText: "This field is required" },
    });
    isValid = false;
  }

  return isValid;
};

/************************************************
 * Function to calculate Age
 ***********************************************/
function calculate(date) {
  // storing date in string from object
  // {day, month, year} to "dd/mm/yyyy"
  let dateString = "";
  for (const key in date) {
    dateString = date[key].value + "/" + dateString;
  }

  //   creating date Objects for Date of birth and current date and getting their differece
  const DOB = new Date(dateString.slice(0, -1));
  const currntDate = new Date();
  let diffInDate = currntDate - DOB;

  //   setting year
  const year = Math.floor(diffInDate / (365.25 * 24 * 60 * 60 * 1000));
  diffInDate %= 365.25 * 24 * 60 * 60 * 1000;

  // setting month
  const month = Math.floor(diffInDate / (30 * 24 * 60 * 60 * 1000));
  diffInDate %= 30 * 24 * 60 * 60 * 1000;

  //   setting day
  const day = Math.floor(diffInDate / (24 * 60 * 60 * 1000));

  return [year, month, day];
}

export { validateDate, calculate };
