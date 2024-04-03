function determineTime(durations) {
  return (
    durations.reduce((acc, t) => {
      return acc + new Date(`Jan 1, 70 ${t}`).getTime();
    }, 0) <= 86400000
  );
}
