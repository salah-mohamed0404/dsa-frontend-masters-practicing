import { defaultCompareFn } from "../utils";

/**
 * Insertion sort algorithm implementation.
 * @template T The type of elements in the array.
 * @param array The array to be sorted.
 * @param compareFn The comparison function to determine the order of elements.
 * @returns The sorted array.
 */
export function insertionSort<T = number>(
	array: T[],
	compareFn = defaultCompareFn<T>
) {
	for (let i = 1; i < array.length; i++) {
		const numToInsert = array[i];
		let j: number;

		for (j = i - 1; j >= 0 && compareFn(array[j], numToInsert); j--) {
			array[j + 1] = array[j];
		}

		array[j + 1] = numToInsert;
	}

	return array;
}
