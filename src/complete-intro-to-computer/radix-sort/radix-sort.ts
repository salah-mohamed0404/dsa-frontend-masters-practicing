/**
 *
 * Radix Sort Algorithm
 * @param array - The array of items to be sorted.
 * @param getKey - A function that extracts a string representation of the key.
 *                 Note: The algorithm assumes base-10 digits (0-9).
 * @returns A new sorted array.
 */
export function radixSort<T>(
	array: T[],
	getKey: (item: T) => string = (item) => String(item)
): T[] {
	const maxDigits = getMaxDigits(array, getKey);
	const buckets: T[][] = Array.from({ length: 10 }, () => []);

	let sortedArray = [...array];

	for (let digitIndex = 0; digitIndex < maxDigits; digitIndex++) {
		while (sortedArray.length) {
			const item = sortedArray.shift()!;
			const numStr = getKey(item);
			const digit = getDigit(numStr, digitIndex);
			buckets[digit].push(item);
		}

		for (let i = 0; i < buckets.length; i++) {
			while (buckets[i].length) {
				sortedArray.push(buckets[i].shift()!);
			}
		}
	}

	return sortedArray;
}

function getDigit(numStr: string, digitIndex: number): number {
	const char = numStr[numStr.length - 1 - digitIndex];
	return char ? parseInt(char, 10) : 0;
}

function getMaxDigits<T>(array: T[], getKey: (item: T) => string): number {
	let maxDigits = 0;

	for (const item of array) {
		const numStr = getKey(item);
		maxDigits = Math.max(maxDigits, numStr.length);
	}

	return maxDigits;
}
