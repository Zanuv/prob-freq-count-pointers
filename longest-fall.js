function longestFall(arr) {
	if (arr.length === 0) {
		return 0;
	}

	let longestLength = 1;
	let currentLength = 1;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			currentLength++;
			longestLength = Math.max(longestLength, currentLength);
		} else {
			currentLength = 1;
		}
	}

	return longestLength;
}
