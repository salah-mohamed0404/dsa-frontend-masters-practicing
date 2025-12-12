type NestedNumberArray = Array<number | NestedNumberArray>;

/**
 * Recursively adds all numbers in a nested array structure.
 * @param arr - A nested array of numbers.
 * @returns The sum of all numbers in the nested array.
 */

export function recursionNestedNumberArrayAdd(arr: NestedNumberArray): number {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i];

		if (currentElement instanceof Array) {
			sum += recursionNestedNumberArrayAdd(currentElement);
		} else {
			sum += currentElement;
		}
	}

	return sum;
}
