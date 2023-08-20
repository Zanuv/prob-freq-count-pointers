function countPairs(arr, target) {
	const numFrequency = {}; // Store frequency of each number
	let count = 0; // Count of pairs

	for (const num of arr) {
		const complement = target - num;

		if (numFrequency[complement]) {
			count += numFrequency[complement];
		}

		numFrequency[num] = (numFrequency[num] || 0) + 1;
	}

	return count;
}
