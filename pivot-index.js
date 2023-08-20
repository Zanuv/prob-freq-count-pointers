// add whatever parameters you deem necessary
function pivotIndex(arr) {
	let totalSum = 0;
	let leftSum = 0;

	// Calculate the total sum of the array
	for (const num of arr) {
		totalSum += num;
	}

	// Iterate through the array to find the pivot index
	for (let i = 0; i < arr.length; i++) {
		totalSum -= arr[i]; // Subtract the current element from the total sum
		if (leftSum === totalSum) {
			return i; // Found a pivot index
		}
		leftSum += arr[i]; // Add the current element to the left sum
	}

	return -1; // No valid pivot index found
}
