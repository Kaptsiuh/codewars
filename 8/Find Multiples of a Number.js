function findMultiples(integer, limit) {
	let arr = []
	let temp = integer
	while (temp <= limit) {
		arr = [...arr, temp]
		temp += integer
	}
	return arr
}
