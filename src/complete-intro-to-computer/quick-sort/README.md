# Quick Sort

- Code [quick-sort.ts](./quick-sort.ts)
- Tests [quick-sort.test.ts](./quick-sort.test.ts)

## Explanation

Quick Sort is a divide-and-conquer recursive algorithm. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays: those smaller than the pivot and those larger than the pivot. These sub-arrays are then sorted recursively.

In this implementation, we pick the last element as the pivot. We then iterate through the rest of the array, pushing elements into `leftArray` or `rightArray` based on their comparison with the pivot. Finally, we concatenate the sorted left array, the pivot, and the sorted right array.

## Complexity

### Time Complexity

- **Worst: $O(n^2)$** - Occurs when the pivot is consistently the smallest or largest element (e.g., sorting an already sorted array when picking the last element as the pivot).
- **Average: $O(n \log n)$** - Occurs when the pivot divides the array into reasonably balanced partitions.
- **Best: $O(n \log n)$** - Occurs when the pivot perfectly balances the partitions.

### Space Complexity

- **$O(n)$** - This specific implementation uses extra space by creating new arrays (`leftArray` and `rightArray`) at each recursive step. An in-place version would have a space complexity of $O(\log n)$ due to the recursion stack.

## When to use Quick Sort vs. Merge Sort

### Use Quick Sort when:

- **Speed is a priority**: In practice, Quick Sort is often faster than Merge Sort because it has better cache locality and smaller constant factors.
- **Space is limited**: In-place versions of Quick Sort use $O(\log n)$ space, whereas Merge Sort typically requires $O(n)$.
- **Sorting Arrays**: Quick Sort's performance relies on random access, which arrays provide efficiently.

### Use Merge Sort when:

- **Stability is required**: Merge Sort is a **stable** sort, meaning it preserves the relative order of equal elements. Quick Sort is generally not stable.
- **Guaranteed performance**: If you cannot afford the $O(n^2)$ worst-case scenario of Quick Sort, Merge Sort provides a guaranteed $O(n \log n)$.
- **Linked Lists**: Merge Sort is highly efficient for linked lists because it doesn't require random access to elements.
- **External Sorting**: When data is too large to fit into memory, Merge Sort is preferred for sorting data stored on disk.
