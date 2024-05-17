function stairsIn20(s) {
  return (
    s.reduce((acc1, e1) => {
      return (acc1 += e1.reduce((acc2, e2) => {
        return (acc2 += e2);
      }));
    }, 0) * 20
  );
}
