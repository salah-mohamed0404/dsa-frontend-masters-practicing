# Frontend Masters CS Path Practice (TypeScript + TDD)

This repo is my personal practice space for the Frontend Masters Computer Science learning path:
https://frontendmasters.com/learn/computer-science/

The focus is to implement each algorithm/data-structure exercise using **TypeScript** and a **TDD (Test-Driven Development)** workflow (write tests → make them pass → refactor).

## Tech

- TypeScript
- Vitest (tests)
- Vite (dev/build tooling)

## Running locally

```bash
pnpm install
pnpm test
pnpm test:watch
```

## Repo structure

Practice lives under `src/`, organized by course:

```
src/
	<course>/
		<topic-or-module>/
			<exercise>/
				README.md
				<exercise>.ts
				<exercise>.test.ts
```

Each exercise folder typically contains:

- `README.md` with the explanation + complexity
- the implementation (`*.ts`)
- the tests (`*.test.ts`)

## Course map (Frontend Masters)

### 1) Complete Intro to Computer Science (v2) — in progress

- Course: https://frontendmasters.com/courses/computer-science-v2/
- Practice folder: [src/complete-intro-to-computer](./src/complete-intro-to-computer)

What I’ve completed so far:

- Sorting
  - Bubble Sort — [src/complete-intro-to-computer/bubble-sort](./src/complete-intro-to-computer/bubble-sort)
  - Insertion Sort — [src/complete-intro-to-computer/insertion-sort](./src/complete-intro-to-computer/insertion-sort)
- Recursion
  - Recursion exercises index — [src/complete-intro-to-computer/recursion-exercises](./src/complete-intro-to-computer/recursion-exercises)
  - Add Nested Number Array — [src/complete-intro-to-computer/recursion-exercises/recursion-nested-add](./src/complete-intro-to-computer/recursion-exercises/recursion-nested-add)

### 2) The Last Algorithms Course You’ll Need

- Course: https://frontendmasters.com/courses/algorithms/
- Status: not started in this repo yet

### 3) Algorithms & Data Structures Practice

- Course: https://frontendmasters.com/courses/algorithms-practice/
- Status: not started in this repo yet
