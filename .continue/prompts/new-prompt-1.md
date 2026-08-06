---
name: Bug Fix
description: Investigate, diagnose and resolve a bug by identifying its root cause before applying any code changes.
invokable: true
---

# Objective

This prompt must be used whenever an existing feature is not working as expected.

Its purpose is to identify the root cause of the problem before proposing or implementing any solution.

The objective is not to make the error disappear.

The objective is to understand why the error exists and fix it without introducing technical debt.

---

# When to use this prompt

Use this prompt when:

- A runtime exception occurs.
- A build fails.
- TypeScript reports errors.
- React behaves unexpectedly.
- Next.js pages fail.
- An API returns unexpected responses.
- Authentication fails.
- A component renders incorrectly.
- A feature behaves differently than expected.

Do not use this prompt for:

- New features.
- Refactoring.
- Code reviews.
- Architecture reviews.

Dedicated prompts exist for those tasks.

---

# Philosophy

Never modify code before understanding the problem.

Symptoms are not the problem.

The objective is always to identify the root cause.

Never guess.

Never apply random fixes.

Never disable validations just to make the error disappear.

---

# Mandatory workflow

## Step 1 — Understand the bug

Explain:

- What is happening.
- What should happen.
- How the issue can be reproduced.
- Whether the issue is deterministic or intermittent.

If information is missing, ask for it.

---

## Step 2 — Collect evidence

Before changing anything inspect:

- Error messages.
- Stack traces.
- Browser console.
- Network requests.
- Server logs.
- Relevant screenshots.
- Existing implementation.

Never assume information that has not been verified.

---

## Step 3 — Locate the root cause

Identify:

- Which layer contains the problem.
- Which file is responsible.
- Which dependency is involved.
- Which execution path causes the issue.

Always trace the execution flow.

Example:

Component

↓

Hook

↓

UseCase

↓

Repository

↓

Service

↓

Backend

---

## Step 4 — Review the documentation

Read the documentation relevant to the affected layer.

Always consult:

- `.ai/AGENT.md`
- `.ai/README.md`
- Relevant architecture chapter
- Relevant template
- `coding-rules.md`

If authentication is involved:

Read the Authentication documentation before continuing.

---

## Step 5 — Compare with similar implementations

Search the project.

Compare the failing implementation with another implementation that already works.

Look for architectural inconsistencies.

---

## Step 6 — Design the fix

Explain:

- Root cause.
- Proposed solution.
- Why it fixes the problem.
- Possible side effects.

Do not generate code yet.

---

## Step 7 — Identify affected files

Separate:

### Files to modify

...

### Files to inspect

...

Explain why each file is involved.

---

## Step 8 — Implement the fix

Only modify files that are strictly necessary.

Keep the architecture unchanged unless explicitly requested.

---

## Step 9 — Validate

Verify that:

- The original issue is solved.
- No regressions have appeared.
- The architecture is still respected.
- The implementation remains maintainable.

---

# Things you must always verify

- Root cause identified.
- Clean Architecture respected.
- MVVM respected.
- Repository Pattern respected.
- No duplicated logic.
- No unnecessary changes.
- No broken contracts.
- No architectural regressions.

---

# Things you must never do

Never:

- Apply random fixes.
- Modify unrelated files.
- Hide exceptions.
- Remove validations.
- Disable TypeScript.
- Ignore warnings.
- Introduce technical debt.
- Break Clean Architecture.
- Modify architecture just to solve a bug.

---

# Response format

Always answer using this structure.

## 1. Bug Summary

Explain the issue.

---

## 2. Root Cause Analysis

Describe the technical cause.

---

## 3. Investigation

Explain how the issue was analysed.

---

## 4. Proposed Fix

Explain the solution.

---

## 5. Affected Files

Separate:

- Files to inspect.
- Files to modify.

---

## 6. Risks

Describe possible side effects.

---

## 7. Implementation

Generate the code.

---

## 8. Validation

Explain how to verify that the issue has been resolved.

---

# Definition of Done

A bug is only considered fixed when:

- The root cause has been identified.
- The original issue no longer occurs.
- No regressions have been introduced.
- Clean Architecture is preserved.
- Existing coding standards are respected.
- Documentation remains valid.
- No unnecessary code has been added.

Never consider a bug resolved simply because the visible symptom disappeared.