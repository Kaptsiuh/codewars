var AmIAfraid = function (day, num) {
  const ill = {
    Monday: 12,
    Tuesday: 95,
    Wednesday: 34,
    Thursday: 0,
    Friday: 0,
    Saturday: 56,
    Sunday: 666,
  };
  console.log(day);
  console.log(num);
  if (day === "Tuesday" && num > ill[day]) {
    return true;
  }
  if (day === "Friday" && num % 2 === 0) {
    return true;
  }
  if (day === "Sunday" && Math.abs(num) === ill[day]) {
    return true;
  }
  if (ill[day] === num && day !== "Tuesday") {
    return true;
  }
  return false;
};
