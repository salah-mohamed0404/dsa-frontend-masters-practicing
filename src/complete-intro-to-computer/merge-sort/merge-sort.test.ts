import { describe, expect, test } from "vitest";
import { mergeSort, merge } from "./merge-sort";

describe("Merge Sort Tests", () => {
	test("should sort a basic numeric array", () => {
		const testArray = [5, 3, 2, 4, 1];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
	});

	// Edge cases
	test("should handle an empty array", () => {
		const testArray: number[] = [];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([]);
	});

	test("should handle an array with one element", () => {
		const testArray = [42];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([42]);
	});

	test("should handle an already sorted array", () => {
		const testArray = [1, 2, 3, 4, 5];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
	});

	test("should handle a reverse sorted array", () => {
		const testArray = [5, 4, 3, 2, 1];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
	});

	// Duplicates & negative numbers
	test("should handle duplicate values", () => {
		const testArray = [3, 1, 2, 1, 3];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([1, 1, 2, 3, 3]);
	});

	test("should handle negative numbers", () => {
		const testArray = [-3, 1, -2, 5, 0];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([-3, -2, 0, 1, 5]);
	});

	test("should handle floating point numbers", () => {
		const testArray = [3.5, 1.2, 4.8, 2.1, 0.9];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual([0.9, 1.2, 2.1, 3.5, 4.8]);
	});

	// Custom compare function tests
	test("should sort in descending order with custom comparator", () => {
		const testArray = [1, 3, 2, 5, 4];
		const sortedArray = mergeSort(testArray, (a, b) => a < b);
		expect(sortedArray).toEqual([5, 4, 3, 2, 1]);
	});

	test("should sort strings alphabetically", () => {
		const testArray = ["banana", "apple", "cherry", "date"];
		const sortedArray = mergeSort(testArray);
		expect(sortedArray).toEqual(["apple", "banana", "cherry", "date"]);
	});

	test("should sort objects by property with custom comparator", () => {
		const items = [{ age: 30 }, { age: 20 }, { age: 25 }];
		const byAge = (a: { age: number }, b: { age: number }) => a.age > b.age;
		const sortedArray = mergeSort(items, byAge);
		expect(sortedArray).toEqual([{ age: 20 }, { age: 25 }, { age: 30 }]);
	});

	test("should handle larger arrays", () => {
		const testArray = Array.from({ length: 200 }, () =>
			Math.floor(Math.random() * 1000)
		);
		const sortedArray = mergeSort([...testArray]);
		const expectedArray = [...testArray].sort((a, b) => a - b);
		expect(sortedArray).toEqual(expectedArray);
	});

	describe("merge function specific tests", () => {
		test("should correctly merge two sorted arrays", () => {
			const leftArray = [1, 3, 5];
			const rightArray = [2, 4, 6];
			const mergedArray = merge(leftArray, rightArray);
			expect(mergedArray).toEqual([1, 2, 3, 4, 5, 6]);
		});

		test("should handle merging when one array is empty", () => {
			const leftArray: number[] = [];
			const rightArray = [1, 2, 3];
			const mergedArray = merge(leftArray, rightArray);
			expect(mergedArray).toEqual([1, 2, 3]);
		});

		test("should handle merging when both arrays are empty", () => {
			const leftArray: number[] = [];
			const rightArray: number[] = [];
			const mergedArray = merge(leftArray, rightArray);
			expect(mergedArray).toEqual([]);
		});
	});
});
