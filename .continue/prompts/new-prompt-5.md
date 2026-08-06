---
name: Performance Review
description: Analyze the performance of an implementation and identify optimization opportunities while preserving the project's architecture.
invokable: true
---

# Objective

This prompt must be used whenever the performance of a feature, component or module needs to be evaluated.

The objective is to identify performance bottlenecks, unnecessary work and scalability issues without sacrificing maintainability or architectural quality.

Never optimize code prematurely.

Only recommend optimizations that provide measurable or meaningful benefits.

---

# When to use this prompt

Use this prompt when:

- A page feels slow.
- A component renders too often.
- API requests seem excessive.
- State management becomes complex.
- A feature has grown significantly.
- Before releasing an important feature.
- After implementing a complex module.

Do not use this prompt for:

- Creating new features.
- Bug fixing.
- Architecture redesign.
- Code formatting.

Dedicated prompts exist for those scenarios.

---

# Philosophy

Performance is important.

Architecture is more important.

Never sacrifice readability or maintainability for micro-optimizations.

Always optimize based on evidence.

Avoid premature optimization.

---

# Mandatory workflow

## Step 1 — Understand the implementation

Explain:

- What the feature does.
- Which components are involved.
- Which Hooks participate.
- Which UseCases are executed.
- Which API calls are performed.

---

## Step 2 — Read project documentation

Always consult:

- `.ai/AGENT.md`
- `.ai/README.md`
- Relevant architecture chapter.
- Relevant templates.
- `coding-rules.md`

---

## Step 3 — Analyze rendering

Verify:

- Unnecessary renders.
- Components rendering too frequently.
- Missing memoization opportunities.
- Incorrect dependency arrays.
- Large rendering trees.

---

## Step 4 — Analyze state management

Verify:

- Duplicate state.
- Derived state stored unnecessarily.
- State located at the wrong level.
- Unnecessary reactivity.
- Expensive state updates.

---

## Step 5 — Analyze API usage

Verify:

- Duplicate requests.
- Unnecessary requests.
- Sequential requests that could be parallelized.
- Missing caching opportunities.
- Inefficient pagination.

---

## Step 6 — Analyze Components

Verify:

- Component size.
- Rendering complexity.
- Heavy computations inside render.
- Large lists.
- Expensive props.

---

## Step 7 — Analyze Hooks

Verify:

- Heavy calculations.
- Missing useMemo.
- Missing useCallback where appropriate.
- Excessive state.
- Expensive effects.

Only recommend memoization when there is a measurable benefit.

---

## Step 8 — Analyze Next.js

Verify:

- Correct usage of Server Components.
- Client Components only where necessary.
- Dynamic imports when appropriate.
- Image optimization.
- Route optimization.

---

## Step 9 — Analyze bundle size

Identify:

- Large dependencies.
- Duplicate libraries.
- Dead code.
- Unused imports.
- Unnecessary packages.

---

## Step 10 — Analyze scalability

Evaluate:

- Will performance degrade as data grows?
- Will rendering remain stable?
- Can the implementation support significantly larger datasets?

---

# Things you must always verify

- Rendering efficiency.
- API efficiency.
- Memory usage.
- Bundle size.
- React best practices.
- Next.js best practices.
- Clean Architecture compliance.

---

# Things you must never do

Never:

- Recommend premature optimization.
- Break Clean Architecture.
- Reduce readability unnecessarily.
- Suggest memoization everywhere.
- Suggest optimizations without explaining the expected benefit.
- Ignore maintainability.

---

# Response format

Always answer using this structure.

## 1. Performance Summary

Describe the implementation from a performance perspective.

---

## 2. Strengths

List existing performance strengths.

---

## 3. Bottlenecks

Identify every bottleneck.

---

## 4. Optimization Opportunities

Explain every possible optimization.

For each recommendation include:

- Expected benefit.
- Complexity.
- Priority.
- Architectural impact.

---

## 5. Performance Score

Rendering: /10

State Management: /10

API Usage: /10

Bundle Size: /10

Scalability: /10

Maintainability: /10

Overall: /10

---

## 6. Final Verdict

Choose one.

✅ Performance is acceptable.

⚠️ Optimizations recommended.

❌ Significant performance issues detected.

---

# Definition of Done

A performance review is complete only when:

- Rendering has been evaluated.
- State management has been analyzed.
- API usage has been reviewed.
- Next.js best practices have been verified.
- Bundle size has been considered.
- Every recommendation includes its expected benefit.
- Architectural integrity remains preserved.

Never recommend an optimization unless its benefit clearly outweighs its complexity.