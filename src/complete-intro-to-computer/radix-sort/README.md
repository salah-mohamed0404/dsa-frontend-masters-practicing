# Radix Sort

- Code: [radix-sort.ts](./radix-sort.ts)
- Tests: [radix-sort.test.ts](./radix-sort.test.ts)

## Explanation

Radix sort is a non-comparative sorting algorithm that avoids direct comparisons between elements. Instead, it sorts data by grouping keys by the individual digits which share the same significant position and value.

It works by distributing elements into buckets based on their digits, starting from the least significant digit (rightmost) to the most significant digit (leftmost). After each pass, the elements are collected back into a single list, maintaining the relative order from the previous pass. This makes it a **stable sort**, which is crucial for its correctness across multiple digit passes.

This implementation assumes base-10 digits (0-9) and can handle objects by using a provided `getKey` function to extract the numeric string representation.

## Complexity

### Time Complexity

- Worst: $O(nk)$
- Average: $O(nk)$
- Best: $O(nk)$

Where $n$ is the number of elements and $k$ is the number of digits in the largest number (the number of passes required).

### Space Complexity

$O(n + w)$ where $w$ is the number of buckets (the base/radix, which is 10 in this case).
