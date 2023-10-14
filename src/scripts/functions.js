// important functions

/************************************************
 * Function to validate Date
 ***********************************************/
const validateDate = (date, setDate) => {
  let isValid = [true, true, true];
  let dayErrorText = "",
    monthErrorText = "",
    yearErrorText = "";

  //  Check for valid year
  if (date.year.value === "") {
    isValid[2] = false;
    yearErrorText = "This field is required";
  } else if (+date.year.value > +new Date().getFullYear()) {
    isValid[2] = false;
    yearErrorText = "Must be in the past";
  } else {
    isValid[2] = true;
    yearErrorText = "";
  }

  // check for valid month
  if (date.month.value === "") {
    isValid[1] = false;
    monthErrorText = "This field is required";
  } else if (+date.month.value < 1 || +date.month.value > 12) {
    isValid[1] = false;
    monthErrorText = "Must be a valid month";
  } else {
    isValid[1] = true;
    monthErrorText = "";
  }

  // check for valid date
  if (date.day.value === "") {
    isValid[0] = false;
    dayErrorText = "This field is required";
  } else if (date.day.value < 1 || date.day.value > 31) {
    isValid[0] = false;
    dayErrorText = "Must be a valid day";
  } else if (date.month.value === "2" && date.day.value > 29) {
    isValid[0] = false;
    dayErrorText = "Must be a valid day";
  } else if (date.month.value in [4, 6, 9, 11] && date.day.value > 30) {
    isValid[0] = false;
    dayErrorText = "Must be a valid day";
  } else {
    isValid[0] = true;
    dayErrorText = "";
  }

  setDate({
    day: { ...date.day, errorText: dayErrorText },
    month: { ...date.month, errorText: monthErrorText },
    year: { ...date.year, errorText: yearErrorText },
  });

  // return true if all of the input are valid
  return isValid[0] && isValid[1] && isValid[2];
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
  const month = Math.floor(diffInDate / (30.5 * 24 * 60 * 60 * 1000));
  diffInDate %= 30.5 * 24 * 60 * 60 * 1000;

  //   setting day
  const day = Math.floor(diffInDate / (24 * 60 * 60 * 1000));

  return [year, month, day];
}

export { validateDate, calculate };
