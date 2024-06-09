function grader(score) {
  return score > 1 || score < 0.6
    ? "F"
    : score >= 0.9 && score <= 1
    ? "A"
    : score >= 0.8 && score < 0.9
    ? "B"
    : score >= 0.7 && score < 0.8
    ? "C"
    : "D";
}
