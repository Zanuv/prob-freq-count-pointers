function sameFrequency(num1, num2) {
	const str1 = num1.toString();
	const str2 = num2.toString();

	if (str1.length !== str2.length) {
		return false;
	}

	const frequencyCounter = {};

	for (const char of str1) {
		frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
	}

	for (const char of str2) {
		if (!frequencyCounter[char]) {
			return false;
		}
		frequencyCounter[char]--;
	}

	return true;
}
