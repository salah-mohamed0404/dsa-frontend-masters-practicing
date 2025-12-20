import { describe, expect, test } from "vitest";
import { quickSort } from "./quick-sort";

describe("Quick Sort Tests", () => {
	test("should sort a basic numeric array", () => {
		const testArray = [5, 3, 2, 4, 1];
		expect(quickSort(testArray)).toEqual([1, 2, 3, 4, 5]);
	});

	// Edge cases
	test("should handle an empty array", () => {
		expect(quickSort([])).toEqual([]);
	});

	test("should handle a single element array", () => {
		expect(quickSort([42])).toEqual([42]);
	});

	test("should handle an already sorted array", () => {
		const testArray = [1, 2, 3, 4, 5];
		expect(quickSort(testArray)).toEqual([1, 2, 3, 4, 5]);
	});

	test("should handle a reverse sorted array", () => {
		const testArray = [5, 4, 3, 2, 1];
		expect(quickSort(testArray)).toEqual([1, 2, 3, 4, 5]);
	});

	// Duplicates & negative numbers
	test("should handle duplicate values", () => {
		const testArray = [3, 1, 2, 1, 3];
		expect(quickSort(testArray)).toEqual([1, 1, 2, 3, 3]);
	});

	test("should handle negative numbers", () => {
		const testArray = [-3, 1, -2, 5, 0];
		expect(quickSort(testArray)).toEqual([-3, -2, 0, 1, 5]);
	});

	test("should handle floating point numbers", () => {
		const testArray = [3.5, 1.2, 4.8, 2.1, 0.9];
		expect(quickSort(testArray)).toEqual([0.9, 1.2, 2.1, 3.5, 4.8]);
	});

	// Custom compare function tests
	test("should sort in descending order with custom comparator", () => {
		const testArray = [1, 3, 2, 5, 4];
		expect(quickSort(testArray, (a, b) => a < b)).toEqual([5, 4, 3, 2, 1]);
	});

	test("should sort strings alphabetically", () => {
		const testArray = ["banana", "apple", "cherry", "date"];
		expect(quickSort(testArray)).toEqual(["apple", "banana", "cherry", "date"]);
	});

	test("should sort objects by property with custom comparator", () => {
		const items = [{ age: 30 }, { age: 20 }, { age: 25 }];
		const byAge = (a: { age: number }, b: { age: number }) => a.age > b.age;
		expect(quickSort(items, byAge)).toEqual([
			{ age: 20 },
			{ age: 25 },
			{ age: 30 },
		]);
	});

	test("should match native sort for random numeric arrays", () => {
		const testArray = Array.from({ length: 200 }, () =>
			Math.floor(Math.random() * 1000)
		);
		const expected = [...testArray].sort((a, b) => a - b);
		expect(quickSort([...testArray])).toEqual(expected);
	});
});
