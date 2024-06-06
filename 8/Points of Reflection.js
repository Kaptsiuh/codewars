function symmetricPoint(p, q) {
	const first = 2 * q[0] - p[0]
	const second = 2 * q[1] - p[1]
	return [first, second]
}
