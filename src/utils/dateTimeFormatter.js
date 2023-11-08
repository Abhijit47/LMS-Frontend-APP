export const timeFormat = (time) => {
  let inputString = time;
  return inputString = inputString.slice(0, 2) + ":" + inputString.slice(2);
};

export const dayMonthFormat = (date) => {
  const options = { day: "numeric", month: "short" };
  return new Intl.DateTimeFormat("en-IN", options).format(new Date(date));
};

export const yearFormat = (date) => {
  const options = { year: "numeric" };
  return new Intl.DateTimeFormat("en-IN", options).format(new Date(date));
};