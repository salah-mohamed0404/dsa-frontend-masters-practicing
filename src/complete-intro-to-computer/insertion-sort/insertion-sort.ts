import { defaultCompareFn } from "../utils";

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
