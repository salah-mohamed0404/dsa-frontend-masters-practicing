import { defaultCompareFn } from "../utils";

/**
 * @template T
 * @param array The array to be sorted of type T
 * @param compareFn Optional comparison function to determine the order of elements
 * @returns A new sorted array of type T
 */
export function mergeSort<T>(array: T[], compareFn = defaultCompareFn<T>): T[] {
	if (array.length <= 1) return array;

	const middlePoint = Math.floor(array.length / 2);
	const leftArray = array.slice(0, middlePoint);
	const rightArray = array.slice(middlePoint);

	const sortedLeftArray = mergeSort(leftArray, compareFn);
	const sortedRightArray = mergeSort(rightArray, compareFn);

	return merge(sortedLeftArray, sortedRightArray, compareFn);
}

/**
 * @template T
 * @param leftArray The left sorted array of type T
 * @param rightArray The right sorted array of type T
 * @param compareFn Optional comparison function to determine the order of elements
 * @returns A new merged and sorted array of type T
 */
export function merge<T>(
	leftArray: T[],
	rightArray: T[],
	compareFn = defaultCompareFn<T>
): T[] {
	const mergeResultArray: T[] = [];

	while (leftArray.length && rightArray.length) {
		if (compareFn(rightArray[0], leftArray[0]))
			mergeResultArray.push(leftArray.shift()!);
		else mergeResultArray.push(rightArray.shift()!);
	}

	return mergeResultArray.concat(leftArray, rightArray);
}
