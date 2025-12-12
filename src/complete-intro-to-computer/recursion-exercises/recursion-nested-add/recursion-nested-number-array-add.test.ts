import { describe, expect, test } from "vitest";
import { recursionNestedNumberArrayAdd } from "./recursion-nested-number-array-add";

describe("recursion nested add function tests", () => {
	test("flat number array ", () => {
		expect(recursionNestedNumberArrayAdd([1, 2, 3, 4, 5])).toBe(15);
	});
	test("nested number array ", () => {
		expect(recursionNestedNumberArrayAdd([1, [2, 3], 4, [5]])).toBe(15);
	});
	test("deeply nested number array ", () => {
		expect(recursionNestedNumberArrayAdd([1, [2, [3, 4]], 5])).toBe(15);
	});
	test("empty array ", () => {
		expect(recursionNestedNumberArrayAdd([])).toBe(0);
	});
	test("array with negative numbers ", () => {
		expect(recursionNestedNumberArrayAdd([1, [-2, 3], 4, [-5]])).toBe(1);
	});
});
