function isSubsequence(str1, str2) {
	let i = 0; // Pointer for str1
	let j = 0; // Pointer for str2

	while (j < str2.length) {
		if (str1[i] === str2[j]) {
			i++; // Move to the next character in str1
			if (i === str1.length) {
				return true; // All characters in str1 are found in str2
			}
		}
		j++; // Move to the next character in str2
	}

	return false; // Not all characters in str1 were found in str2
}
