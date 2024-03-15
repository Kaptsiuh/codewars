function makeClass(...properties) {
  return function (...propertyValues) {
    properties.forEach((property, i) => {
      this[property] = propertyValues[i];
    });
  };
}
