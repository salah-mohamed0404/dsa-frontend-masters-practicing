/**
 * Default compare function for bubble sort (ascending)
 * @template T - Type of array elements (defaults to number)
 * @param a - First element
 * @param b - Second element
 * @returns True if a is greater than b, false otherwise
 */
export function defaultCompareFn<T = number>(a: T, b: T): boolean {
	return a > b;
}
