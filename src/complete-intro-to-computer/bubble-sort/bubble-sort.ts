import { defaultCompareFn } from "../utils";

/**
 * Bubble sort algorithm implementation
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @template T - Type of array elements (defaults to number)
 * @param array - Array to sort
 * @param compareFn - Function to compare elements (defaults to ascending)
 * @returns Sorted array
 */
export function bubbleSort<T = number>(
	array: T[],
	compareFn: (a: T, b: T) => boolean = defaultCompareFn<T>
) {
	let swapped = false;
	let iterations = array.length;

	do {
		swapped = false;

		for (let i = 0; i < iterations - 1; i++)
			if (compareFn(array[i], array[i + 1])) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				swapped = true;
			}

		iterations--;
	} while (swapped);

	return array;
}
