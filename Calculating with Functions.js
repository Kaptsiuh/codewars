function zero(z) {
  if (z) {
    return z(0);
  }
  return 0;
}
function one(z) {
  if (z) {
    return z(1);
  }
  return 1;
}
function two(z) {
  if (z) {
    return z(2);
  }
  return 2;
}
function three(z) {
  if (z) {
    return z(3);
  }
  return 3;
}
function four(z) {
  if (z) {
    return z(4);
  }
  return 4;
}
function five(z) {
  if (z) {
    return z(5);
  }
  return 5;
}
function six(z) {
  if (z) {
    return z(6);
  }
  return 6;
}
function seven(z) {
  if (z) {
    return z(7);
  }
  return 7;
}
function eight(z) {
  if (z) {
    return z(8);
  }
  return 8;
}
function nine(z) {
  if (z) {
    return z(9);
  }
  return 9;
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return y * x;
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}
