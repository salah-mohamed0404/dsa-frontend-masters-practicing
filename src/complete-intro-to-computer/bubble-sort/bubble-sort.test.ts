import { test, expect, describe } from "vitest";
import { bubbleSort } from "./bubble-sort";

describe("Bubble sort tests", () => {
	test("should sort an array", () => {
		const testArray = [5, 3, 2, 4, 1];
		const sortedArray = bubbleSort(testArray);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
	});

	// Edge cases
	test("should handle an empty array", () => {
		expect(bubbleSort([])).toEqual([]);
	});

	test("should handle a single element array", () => {
		expect(bubbleSort([42])).toEqual([42]);
	});

	test("should handle an already sorted array", () => {
		const testArray = [1, 2, 3, 4, 5];
		expect(bubbleSort(testArray)).toEqual(testArray);
	});

	test("should handle a reverse sorted array", () => {
		const testArray = [5, 4, 3, 2, 1];
		expect(bubbleSort(testArray)).toEqual([1, 2, 3, 4, 5]);
	});

	// Duplicates & negative numbers
	test("should handle duplicate values", () => {
		const testArray = [3, 1, 2, 1, 3];
		expect(bubbleSort(testArray)).toEqual([1, 1, 2, 3, 3]);
	});

	test("should handle negative numbers", () => {
		const testArray = [-3, 1, -2, 5, 0];
		expect(bubbleSort(testArray)).toEqual([-3, -2, 0, 1, 5]);
	});

	// Custom compare function tests
	test("should sort in descending order with custom compareFn", () => {
		const descending = (a: number, b: number) => a < b;
		const testArray = [1, 3, 2, 5, 4];
		expect(bubbleSort(testArray, descending)).toEqual([5, 4, 3, 2, 1]);
	});

	test("should sort strings alphabetically", () => {
		const testArray = ["banana", "apple", "cherry"];
		expect(bubbleSort(testArray)).toEqual(["apple", "banana", "cherry"]);
	});

	test("should sort objects by property", () => {
		const items = [{ age: 30 }, { age: 20 }, { age: 25 }];
		const byAge = (a: { age: number }, b: { age: number }) => a.age > b.age;
		expect(bubbleSort(items, byAge)).toEqual([
			{ age: 20 },
			{ age: 25 },
			{ age: 30 },
		]);
	});
});
