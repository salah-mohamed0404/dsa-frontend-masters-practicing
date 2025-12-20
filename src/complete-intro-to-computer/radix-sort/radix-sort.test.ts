import { describe, expect, test } from "vitest";
import { radixSort } from "./radix-sort";

describe("Radix Sort Tests", () => {
	test("should sort a basic numeric array (non-negative integers)", () => {
		const testArray = [170, 45, 75, 90, 802, 24, 2, 66];
		expect(radixSort(testArray)).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
	});

	// Edge cases
	test("should handle an empty array", () => {
		expect(radixSort([])).toEqual([]);
	});

	test("should handle a single element array", () => {
		expect(radixSort([42])).toEqual([42]);
	});

	test("should handle an already sorted array", () => {
		const testArray = [0, 1, 2, 3, 4, 5, 10, 11, 12];
		expect(radixSort(testArray)).toEqual(testArray);
	});

	test("should handle a reverse sorted array", () => {
		const testArray = [100, 50, 20, 10, 5, 2, 1, 0];
		expect(radixSort(testArray)).toEqual([0, 1, 2, 5, 10, 20, 50, 100]);
	});

	test("should handle duplicates", () => {
		const testArray = [3, 1, 2, 1, 3, 0, 0, 10, 10];
		expect(radixSort(testArray)).toEqual([0, 0, 1, 1, 2, 3, 3, 10, 10]);
	});

	test("should handle varying digit lengths", () => {
		const testArray = [1, 10, 100, 2, 20, 200, 11, 101, 0];
		expect(radixSort(testArray)).toEqual([0, 1, 2, 10, 11, 20, 100, 101, 200]);
	});

	test("should be stable for items with equal keys", () => {
		const items = [
			{ id: "a", score: 21 },
			{ id: "b", score: 11 },
			{ id: "c", score: 21 },
			{ id: "d", score: 11 },
		];

		const sorted = radixSort(items, (item: any) => String(item.score));
		expect(sorted.map((x: any) => x.id)).toEqual(["b", "d", "a", "c"]);
	});

	test("should sort objects using getKey", () => {
		const items = [{ n: 300 }, { n: 2 }, { n: 25 }, { n: 101 }, { n: 0 }];
		const sorted = radixSort(items, (item: any) => String(item.n));
		expect(sorted.map((x: any) => x.n)).toEqual([0, 2, 25, 101, 300]);
	});

	test("should match native sort for random non-negative integer arrays", () => {
		const testArray = Array.from({ length: 200 }, () =>
			Math.floor(Math.random() * 100000)
		);
		const expected = [...testArray].sort((a, b) => a - b);
		expect(radixSort([...testArray])).toEqual(expected);
	});
});
