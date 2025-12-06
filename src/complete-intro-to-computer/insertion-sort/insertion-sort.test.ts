import { describe, expect, test } from "vitest";
import { insertionSort } from "./insertion-sort";

describe("Insertion sort tests", () => {
	test("should sort a basic numeric array", () => {
		const testArray = [5, 3, 2, 4, 1];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
	});

	test("should handle an empty array", () => {
		const testArray: number[] = [];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([]);
	});

	test("should handle an array with one element", () => {
		const testArray = [42];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([42]);
	});

	test("should handle an already sorted array", () => {
		const testArray = [1, 2, 3, 4, 5];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
	});

	test("should handle a reverse sorted array", () => {
		const testArray = [5, 4, 3, 2, 1];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
	});

	test("should handle an array with duplicate values", () => {
		const testArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 9]);
	});

	test("should handle negative numbers", () => {
		const testArray = [-5, 3, -2, 4, -1, 0];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([-5, -2, -1, 0, 3, 4]);
	});

	test("should handle floating point numbers", () => {
		const testArray = [3.5, 1.2, 4.8, 2.1, 0.9];
		const sortedArray = insertionSort(testArray);
		expect(sortedArray).toEqual([0.9, 1.2, 2.1, 3.5, 4.8]);
	});

	test("should sort strings with custom comparator", () => {
		const testArray = ["banana", "apple", "cherry", "date"];
		const sortedArray = insertionSort(testArray, (a, b) => a > b);
		expect(sortedArray).toEqual(["apple", "banana", "cherry", "date"]);
	});

	test("should sort objects with custom comparator", () => {
		const testArray = [
			{ name: "John", age: 30 },
			{ name: "Jane", age: 25 },
			{ name: "Bob", age: 35 },
		];
		const sortedArray = insertionSort(testArray, (a, b) => a.age > b.age);
		expect(sortedArray).toEqual([
			{ name: "Jane", age: 25 },
			{ name: "John", age: 30 },
			{ name: "Bob", age: 35 },
		]);
	});

	test("should sort in descending order with custom comparator", () => {
		const testArray = [5, 3, 2, 4, 1];
		const sortedArray = insertionSort(testArray, (a, b) => a < b);
		expect(sortedArray).toEqual([5, 4, 3, 2, 1]);
	});

	test("should handle large arrays efficiently", () => {
		const testArray = Array.from({ length: 100 }, () =>
			Math.floor(Math.random() * 1000)
		);
		const sortedArray = insertionSort([...testArray]);
		const expectedArray = [...testArray].sort((a, b) => a - b);
		expect(sortedArray).toEqual(expectedArray);
	});
});
