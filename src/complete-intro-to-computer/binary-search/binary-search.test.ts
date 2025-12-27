import { describe, expect, test } from "vitest";
import { binarySearch, binarySearchWithRecursion } from "./binary-search";

/**
 * Shared test suite for binary search implementations
 * This ensures both iterative and recursive versions are tested with identical test cases
 */
const runBinarySearchTests = (
	searchFn: typeof binarySearch,
	implementationName: "Iterative" | "Recursive"
) => {
	describe(`${implementationName} - Number arrays with default compareFn`, () => {
		test("should find element in sorted number array", () => {
			const array = [1, 3, 5, 7, 9, 11, 13];
			expect(searchFn(7, array)).toBe(7);
		});

		test("should find first element", () => {
			const array = [1, 3, 5, 7, 9];
			expect(searchFn(1, array)).toBe(1);
		});

		test("should find last element", () => {
			const array = [1, 3, 5, 7, 9];
			expect(searchFn(9, array)).toBe(9);
		});

		test("should find middle element", () => {
			const array = [1, 3, 5, 7, 9];
			expect(searchFn(5, array)).toBe(5);
		});

		test("should return undefined for element not in array", () => {
			const array = [1, 3, 5, 7, 9];
			expect(searchFn(4, array)).toBeUndefined();
		});

		test("should return undefined for element smaller than all elements", () => {
			const array = [1, 3, 5, 7, 9];
			expect(searchFn(0, array)).toBeUndefined();
		});

		test("should return undefined for element larger than all elements", () => {
			const array = [1, 3, 5, 7, 9];
			expect(searchFn(10, array)).toBeUndefined();
		});

		test("should handle single element array - found", () => {
			expect(searchFn(5, [5])).toBe(5);
		});

		test("should handle single element array - not found", () => {
			expect(searchFn(3, [5])).toBeUndefined();
		});

		test("should handle two element array - find first", () => {
			expect(searchFn(5, [5, 10])).toBe(5);
		});

		test("should handle two element array - find second", () => {
			expect(searchFn(10, [5, 10])).toBe(10);
		});

		test("should handle two element array - not found", () => {
			expect(searchFn(7, [5, 10])).toBeUndefined();
		});

		test("should handle large sorted array", () => {
			const array = Array.from({ length: 1000 }, (_, i) => i * 2);
			expect(searchFn(500, array)).toBe(500);
			expect(searchFn(999, array)).toBeUndefined();
			expect(searchFn(0, array)).toBe(0);
			expect(searchFn(1998, array)).toBe(1998);
		});
	});

	describe(`${implementationName} - Object arrays with custom compareFn`, () => {
		test("should find object by id property", () => {
			const array = [
				{ id: 1, name: "John" },
				{ id: 2, name: "Jane" },
				{ id: 3, name: "Bob" },
			];
			expect(
				searchFn({ id: 2, name: "Jane" }, array, (a, b) => a.id - b.id)
			).toEqual({
				id: 2,
				name: "Jane",
			});
		});

		test("should return undefined when object not found", () => {
			const array = [
				{ id: 1, name: "John" },
				{ id: 2, name: "Jane" },
				{ id: 3, name: "Bob" },
			];
			expect(
				searchFn({ id: 4, name: "Alice" }, array, (a, b) => a.id - b.id)
			).toBeUndefined();
		});

		test("should handle duplicate values and return one of them", () => {
			const array = [
				{ id: 1, name: "John" },
				{ id: 2, name: "Jane" },
				{ id: 2, name: "Bob" },
			];
			const result = searchFn(
				{ id: 2, name: "" },
				array,
				(a, b) => a.id - b.id
			);
			expect(result?.id).toBe(2);
		});

		test("should find object in array with single element", () => {
			const array = [{ id: 1, name: "John" }];
			expect(
				searchFn({ id: 1, name: "" }, array, (a, b) => a.id - b.id)
			).toEqual({ id: 1, name: "John" });
		});
	});

	describe(`${implementationName} - String arrays with custom compareFn`, () => {
		test("should find string in sorted array", () => {
			const array = ["apple", "banana", "cherry", "date", "elderberry"];
			expect(searchFn("cherry", array, (a, b) => a.localeCompare(b))).toBe(
				"cherry"
			);
		});

		test("should find first string", () => {
			const array = ["apple", "banana", "cherry", "date", "elderberry"];
			expect(searchFn("apple", array, (a, b) => a.localeCompare(b))).toBe(
				"apple"
			);
		});

		test("should find last string", () => {
			const array = ["apple", "banana", "cherry", "date", "elderberry"];
			expect(searchFn("elderberry", array, (a, b) => a.localeCompare(b))).toBe(
				"elderberry"
			);
		});

		test("should return undefined for string not in array", () => {
			const array = ["apple", "banana", "cherry"];
			expect(
				searchFn("grape", array, (a, b) => a.localeCompare(b))
			).toBeUndefined();
		});
	});

	describe(`${implementationName} - Edge cases`, () => {
		test("should handle empty array", () => {
			expect(searchFn(5, [])).toBeUndefined();
		});

		test("should handle array with negative numbers", () => {
			const array = [-10, -5, 0, 5, 10];
			expect(searchFn(-10, array)).toBe(-10);
			expect(searchFn(-5, array)).toBe(-5);
			expect(searchFn(0, array)).toBe(0);
			expect(searchFn(5, array)).toBe(5);
			expect(searchFn(10, array)).toBe(10);
		});

		test("should handle array with duplicate numbers", () => {
			const array = [1, 2, 2, 2, 3, 4];
			expect(searchFn(2, array)).toBe(2);
		});

		test("should handle array with all same elements", () => {
			const array = [5, 5, 5, 5, 5];
			expect(searchFn(5, array)).toBe(5);
			expect(searchFn(3, array)).toBeUndefined();
		});

		test("should handle very large numbers", () => {
			const array = [1e10, 1e11, 1e12, 1e13];
			expect(searchFn(1e11, array)).toBe(1e11);
		});
	});
};

// Run the shared test suite for both implementations
describe("Binary Search - Iterative Implementation", () => {
	runBinarySearchTests(binarySearch, "Iterative");
});

describe("Binary Search - Recursive Implementation", () => {
	runBinarySearchTests(binarySearchWithRecursion, "Recursive");
});
