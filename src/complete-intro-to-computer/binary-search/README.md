# Binary Search

- Code: [binary-search.ts](./binary-search.ts)
- Tests: [binary-search.test.ts](./binary-search.test.ts)

## Explanation

Binary search is an efficient algorithm for finding a target value within a **sorted** array. It works by repeatedly dividing the search interval in half:

1. Compare the target value to the middle element of the array
2. If they match, return the element
3. If the target is less than the middle element, search the left half
4. If the target is greater than the middle element, search the right half
5. Repeat until the target is found or the search space is empty

The key requirement is that the array must be sorted beforehand. This implementation uses a custom comparison function to support generic types.

## Implementations

This module provides two implementations:

- **`binarySearch`**: Iterative implementation using a while loop
- **`binarySearchWithRecursion`**: Recursive implementation

Both implementations have the same time complexity but differ in space complexity.

## Complexity

### Time Complexity

- Worst: $O(\log n)$
- Average: $O(\log n)$
- Best: $O(1)$ (when the target is at the middle)

### Space Complexity

- **Iterative**: $O(1)$ - uses constant extra space
- **Recursive**: $O(\log n)$ - due to call stack depth
