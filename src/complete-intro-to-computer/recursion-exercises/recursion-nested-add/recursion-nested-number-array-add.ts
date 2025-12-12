type NestedNumberArray = Array<number | NestedNumberArray>;

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
