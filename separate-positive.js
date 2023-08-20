function separatePositive(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		// Find the first negative number from the left
		while (arr[left] > 0) {
			left++;
		}

		// Find the first positive number from the right
		while (arr[right] < 0) {
			right--;
		}

		if (left < right) {
			// Swap the positive and negative numbers
			const temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
		}
	}

	return arr;
}
