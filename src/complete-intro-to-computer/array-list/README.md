# Array List

- Code: [array-list.ts](./array-list.ts)
- Tests: [array-list.test.ts](./array-list.test.ts)

## Explanation

An Array List is a dynamic array implementation that uses a plain object (or a fixed-size array in lower-level languages) to store data elements. It provides automatic resizing and manages an internal length property. When an element is deleted from the middle of the list, all subsequent elements must be "collapsed" or shifted one position to the left to maintain a contiguous sequence.

## Complexity

### Time Complexity

- **push**: $O(1)$ (Average/Amortized)
- **pop**: $O(1)$
- **get**: $O(1)$
- **delete**: $O(n)$ (Requires shifting elements)

### Space Complexity

$O(n)$ where $n$ is the number of elements stored.
