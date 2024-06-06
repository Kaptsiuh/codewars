function evil(n) {
	if (n === 1) {
		return "It's Odious!"
	}
	return n
		.toString(2)
		.split('')
		.filter(e => e !== '0').length %
		2 ===
		0
		? "It's Evil!"
		: "It's Odious!"
}
