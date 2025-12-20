import { defaultCompareFn } from "../utils";

/**
 * @template T
 * @param array The array to be sorted of type T
 * @param compareFn Optional comparison function to determine the order of elements
 * @returns A new sorted array of type T
 */
export function quickSort<T>(array: T[], compareFn = defaultCompareFn<T>): T[] {
	if (array.length <= 1) return array;

	const pivot = array[array.length - 1];

	const leftArray: T[] = [];
	const rightArray: T[] = [];

	for (let i = 0; i < array.length - 1; i++) {
		const current = array[i];

		if (compareFn(pivot, current)) leftArray.push(current);
		else rightArray.push(current);
	}

	const leftSortedArray = quickSort(leftArray, compareFn);
	const rightSortedArray = quickSort(rightArray, compareFn);

	return leftSortedArray.concat(pivot, rightSortedArray);
}
