# Bubble Sort

- Code: [bubble-sort.ts](./bubble-sort.ts)
- Tests: [bubble-sort.test.ts](./bubble-sort.test.ts)

## Explanation

Bubble sort repeatedly walks through the array, compares adjacent elements, and swaps them if they are in the wrong order. Each pass “bubbles” the largest remaining element to the end. With the common optimization of stopping early when a full pass makes no swaps (which this implementation does), it can finish early on already-sorted input.

## Complexity

### Time Complexity

- Worst: $O(n^2)$
- Average: $O(n^2)$
- Best: $O(n)$ (when using early-exit optimization on already-sorted input)

### Space Complexity

Always $O(1)$ (in-place)
