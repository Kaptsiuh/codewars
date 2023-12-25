function calculateAge(start, end) {
  if (start < end && end - start > 1) {
    return `You are ${end - start} years old.`;
  } else if (start < end && end - start === 1) {
    return 'You are 1 year old.';
  } else if (start === end) {
    return 'You were born this very year!';
  } else if (start > end && end - start === -1) {
    return 'You will be born in 1 year.';
  } else {
    return `You will be born in ${start - end} years.`;
  }
}
