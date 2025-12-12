# Add Nested Number Array

- Code [recursion-nested-number-array-add.ts](./recursion-nested-number-array-add.ts)
- Tests [recursion-nested-number-array-add.test.ts](./recursion-nested-number-array-add.test.ts)

## Explanation

We want the sum of all numbers inside an array that can contain numbers _or_ more arrays.

This is a natural fit for recursion:

- **Base case**: an empty array sums to `0`.
- **Recursive case**: walk each element:
  - if it’s a number, add it to the running sum
  - if it’s an array, recursively compute its sum and add that result

Because each nested array is the same “shape” as the original problem (a nested number array), the recursive call is identical to the original function.

## Complexity

### Time Complexity

Let $n$ be the total count of numbers, and $m$ be the total count of nested arrays (including the top-level array). Each element is visited once.

- Worst: $O(n+m)$
- Average: $O(n+m)$
- Best: $O(n+m)$

### Space Complexity

The algorithm uses constant extra space aside from the recursion call stack.
If $D$ is the maximum nesting depth, the call stack space is $O(D)$.
