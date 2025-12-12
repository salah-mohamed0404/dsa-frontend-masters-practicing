# Insertion Sort

- Code [insertion-sort.ts](./insertion-sort.ts)
- Tests [insertion-sort.test.ts](./insertion-sort.test.ts)

## Explanation

Insertion sort builds a sorted “left side” of the array one item at a time.

Starting from index 1, it takes the current value and shifts larger values in the already-sorted portion (to the left) one position to the right until it finds the correct spot, then inserts the value there.

It’s a great choice when the array is small or already nearly sorted.

## Complexity

### Time Complexity

- Worst: $O(n^2)$
- Average: $O(n^2)$
- Best: $O(n)$

### Space Complexity

Always $O(1)$ (in-place)
