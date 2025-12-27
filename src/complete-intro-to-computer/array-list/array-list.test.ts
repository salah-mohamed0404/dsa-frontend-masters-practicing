import { describe, test, expect } from "vitest";
import { ArrayList } from "./array-list";

describe("Array List Tests", () => {
	describe("Constructor", () => {
		test("should initialize with length 0", () => {
			const list = new ArrayList<number>();
			expect(list.length).toBe(0);
		});
	});

	describe("push", () => {
		test("should add single item", () => {
			const list = new ArrayList<number>();
			list.push(5);
			expect(list.length).toBe(1);
			expect(list.get(0)).toBe(5);
		});

		test("should add multiple items", () => {
			const list = new ArrayList<number>();
			list.push(1);
			list.push(2);
			list.push(3);
			expect(list.length).toBe(3);
			expect(list.get(0)).toBe(1);
			expect(list.get(1)).toBe(2);
			expect(list.get(2)).toBe(3);
		});

		test("should work with different types", () => {
			const list = new ArrayList<string>();
			list.push("hello");
			list.push("world");
			expect(list.length).toBe(2);
			expect(list.get(0)).toBe("hello");
			expect(list.get(1)).toBe("world");
		});
	});

	describe("pop", () => {
		test("should remove and return last item", () => {
			const list = new ArrayList<number>();
			list.push(1);
			list.push(2);
			list.push(3);
			const popped = list.pop();
			expect(popped).toBe(3);
			expect(list.length).toBe(2);
		});

		test("should handle popping from single item list", () => {
			const list = new ArrayList<number>();
			list.push(42);
			const popped = list.pop();
			expect(popped).toBe(42);
			expect(list.length).toBe(0);
		});

		test("should return undefined when popping from empty list", () => {
			const list = new ArrayList<number>();
			const popped = list.pop();
			expect(popped).toBeUndefined();
			expect(list.length).toBe(0);
		});
	});

	describe("get", () => {
		test("should return item at valid index", () => {
			const list = new ArrayList<number>();
			list.push(10);
			list.push(20);
			list.push(30);
			expect(list.get(0)).toBe(10);
			expect(list.get(1)).toBe(20);
			expect(list.get(2)).toBe(30);
		});

		test("should return undefined for out of bounds index", () => {
			const list = new ArrayList<number>();
			list.push(1);
			expect(list.get(5)).toBeUndefined();
			expect(list.get(-1)).toBeUndefined();
		});

		test("should return undefined for empty list", () => {
			const list = new ArrayList<number>();
			expect(list.get(0)).toBeUndefined();
		});
	});

	describe("delete", () => {
		test("should delete item at index and shift remaining items", () => {
			const list = new ArrayList<number>();
			list.push(1);
			list.push(2);
			list.push(3);
			list.push(4);
			const deleted = list.delete(1);
			expect(deleted).toBe(2);
			expect(list.length).toBe(3);
			expect(list.get(0)).toBe(1);
			expect(list.get(1)).toBe(3);
			expect(list.get(2)).toBe(4);
		});

		test("should delete first item", () => {
			const list = new ArrayList<number>();
			list.push(1);
			list.push(2);
			list.push(3);
			const deleted = list.delete(0);
			expect(deleted).toBe(1);
			expect(list.length).toBe(2);
			expect(list.get(0)).toBe(2);
			expect(list.get(1)).toBe(3);
		});

		test("should delete last item", () => {
			const list = new ArrayList<number>();
			list.push(1);
			list.push(2);
			list.push(3);
			const deleted = list.delete(2);
			expect(deleted).toBe(3);
			expect(list.length).toBe(2);
			expect(list.get(0)).toBe(1);
			expect(list.get(1)).toBe(2);
		});

		test("should handle deleting from single item list", () => {
			const list = new ArrayList<number>();
			list.push(42);
			const deleted = list.delete(0);
			expect(deleted).toBe(42);
			expect(list.length).toBe(0);
		});
	});

	describe("Combined operations", () => {
		test("should handle mixed operations", () => {
			const list = new ArrayList<number>();
			list.push(1);
			list.push(2);
			list.push(3);
			list.pop();
			list.push(4);
			list.delete(0);
			expect(list.length).toBe(2);
			expect(list.get(0)).toBe(2);
			expect(list.get(1)).toBe(4);
		});
	});
});
