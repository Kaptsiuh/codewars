function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  console.log(c);
  if (c > 0) return c + " is above freezing temperature";
  else return c + " is freezing temperature";
}

function convertToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}
