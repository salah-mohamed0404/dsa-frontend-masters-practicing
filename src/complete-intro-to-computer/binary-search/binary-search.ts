export function binarySearch<T>(
	target: T,
	array: T[],
	compareFn: (a: T, b: T) => number = (a, b) => (a as number) - (b as number)
): T | undefined {
	// Check if the array is empy
	if (array.length === 0) return undefined;

	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const midElement = array[mid];
		const compareResult = compareFn(midElement, target);

		if (compareResult < 0) left = mid + 1;
		else if (compareResult > 0) right = mid - 1;
		else return midElement;
	}

	return undefined;
}

export function binarySearchWithRecursion<T>(
	target: T,
	array: T[],
	compareFn: (a: T, b: T) => number = (a, b) => (a as number) - (b as number),
	left: number = 0,
	right: number = array.length - 1
): T | undefined {
	if (left > right) return undefined;

	const mid = Math.floor((left + right) / 2);
	const midElement = array[mid];
	const midElementCompareResult = compareFn(midElement, target);

	if (midElementCompareResult === 0) return midElement;
	if (midElementCompareResult < 0)
		return binarySearchWithRecursion(target, array, compareFn, mid + 1, right);
	if (midElementCompareResult > 0)
		return binarySearchWithRecursion(target, array, compareFn, left, mid - 1);
}
