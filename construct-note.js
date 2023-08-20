// add whatever parameters you deem necessary
function constructNote(message, letters) {
	const letterCounts = {};

	// Count the occurrences of each letter in the 'letters' string
	for (const letter of letters) {
		letterCounts[letter] = (letterCounts[letter] || 0) + 1;
	}

	// Check if the message can be constructed using the available letters
	for (const char of message) {
		if (!letterCounts[char]) {
			return false;
		}
		letterCounts[char]--;
	}

	return true;
}
