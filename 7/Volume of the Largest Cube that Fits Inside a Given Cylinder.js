function cubeVolume(h, r) {
  return r * Math.sqrt(2) > h ? Math.pow(h, 3) : Math.pow(r * Math.sqrt(2), 3);
}
