---
name: Refactor
description: Improve an existing implementation while preserving its behavior, architecture and functionality.
invokable: true
---

# Objective

This prompt must be used whenever an existing implementation should be improved without changing its external behaviour.

The objective is to improve maintainability, readability, scalability and architectural quality while guaranteeing identical functionality.

A refactor must never introduce new features.

A refactor must never modify business behaviour unless explicitly requested.

---

# When to use this prompt

Use this prompt when:

- Code has become difficult to maintain.
- A component is too large.
- Responsibilities are mixed.
- Code duplication exists.
- The architecture has degraded.
- Naming is inconsistent.
- Logic should be moved to the correct layer.
- Technical debt needs to be reduced.

Do not use this prompt for:

- Bug fixing.
- New features.
- Architecture redesign.
- Performance optimization unless explicitly requested.

Dedicated prompts exist for those scenarios.

---

# Philosophy

A refactor changes the implementation.

It does not change the behaviour.

The application should behave exactly the same before and after the refactor.

Only the internal quality should improve.

---

# Mandatory workflow

## Step 1 — Understand the current implementation

Before changing anything:

Explain:

- What the current implementation does.
- Which layers are involved.
- Which responsibilities each file currently has.

Do not modify anything yet.

---

## Step 2 — Detect architectural problems

Identify:

- Mixed responsibilities.
- Large Components.
- Large Hooks.
- Business logic inside UI.
- Duplicated logic.
- Poor naming.
- Circular dependencies.
- Tight coupling.
- Violations of Clean Architecture.

Explain every issue found.

---

## Step 3 — Read the documentation

Consult:

- `.ai/AGENT.md`
- `.ai/README.md`
- Relevant architecture chapter.
- Relevant templates.
- `coding-rules.md`

Never refactor against the documented architecture.

---

## Step 4 — Search similar implementations

Look for better implementations already existing inside the project.

Prefer consistency over originality.

If another module already solves the same problem correctly, use it as the reference.

---

## Step 5 — Design the refactor

Explain:

- What should change.
- What should remain unchanged.
- Which responsibilities should move.
- Which files will be modified.
- Which files will remain untouched.

Do not generate code yet.

---

## Step 6 — Confidence Check

Before continuing evaluate your confidence.

If confidence is below 90%:

- Explain what information is missing.
- Explain the assumptions that would be required.
- Ask for clarification.

Never guess.

---

## Step 7 — Implementation

Only modify the minimum amount of code required.

Avoid unnecessary rewrites.

Preserve existing behaviour.

---

## Step 8 — Validate

Verify:

- Behaviour has not changed.
- Architecture has improved.
- Technical debt has been reduced.
- Readability has increased.
- No regressions were introduced.

---

# Refactoring priorities

Always prioritize improvements in this order.

1. Remove duplicated code.
2. Separate responsibilities.
3. Improve architecture.
4. Improve naming.
5. Improve readability.
6. Improve maintainability.
7. Improve scalability.

Never prioritize shorter code over cleaner architecture.

---

# Things you must always verify

- Clean Architecture.
- SOLID.
- MVVM.
- Repository Pattern.
- Dependency Injection.
- Type safety.
- Reusability.
- Separation of concerns.

---

# Things you must never do

Never:

- Change business behaviour.
- Introduce new features.
- Rename files unnecessarily.
- Rewrite working code without justification.
- Increase coupling.
- Duplicate code.
- Break interfaces.
- Move files without explanation.
- Modify architecture silently.

---

# Response format

Always answer using this structure.

## 1. Current implementation

Explain how the current implementation works.

---

## 2. Problems detected

List every architectural or maintainability issue.

---

## 3. Refactoring plan

Describe every improvement.

---

## 4. Files affected

Separate:

- Files to modify.
- Files to keep unchanged.

---

## 5. Risks

Describe any possible risks.

---

## 6. Confidence Check

Evaluate whether enough information exists.

---

## 7. Implementation

Generate the refactored code.

---

## 8. Validation

Explain how to verify that behaviour remains identical.

---

# Definition of Done

A refactor is only complete when:

- Behaviour remains identical.
- Architecture has improved.
- Responsibilities are clearer.
- Technical debt has been reduced.
- Code duplication has been removed.
- Existing documentation remains valid.
- No regressions have been introduced.
- The implementation is easier to understand than before.

Never consider a refactor complete simply because the code is shorter.