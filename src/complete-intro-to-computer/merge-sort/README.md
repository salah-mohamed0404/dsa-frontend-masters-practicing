# Merge Sort

- Code [merge-sort.ts](./merge-sort.ts)
- Tests [merge-sort.test.ts](./merge-sort.test.ts)

## Explanation

Merge sort is a recursion based divide and conquer algorithm. it's idea is all about divide the array till we have sub arrays of length 1 (sorted by definition) and merge them back in sorted order till we finally have a sorted array.

## Complexity

### Time Complexity

With merge sort each case is the same already sorted array takes the same time of shuffled or reverse sorted one (with the same number of items "array length")

- Worst: $O(n \log n)$
- Average: $O(n \log n)$
- Best: $O(n \log n)$

### Space Complexity

It creates at least one array for each element so its space complexity is: $O(n)$
