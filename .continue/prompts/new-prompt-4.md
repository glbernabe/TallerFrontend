---
name: Architecture Review
description: Evaluate the architectural quality of an implementation and ensure it follows the project's documented architecture and engineering principles.
invokable: true
---

# Objective

This prompt must be used whenever an implementation, module or feature needs to be evaluated from an architectural perspective.

The objective is not to review syntax or coding style.

The objective is to verify that the implementation follows the project's documented architecture and remains maintainable in the long term.

Always prioritize architectural quality over implementation details.

---

# When to use this prompt

Use this prompt when:

- A new feature has been completed.
- A large Pull Request has been submitted.
- A module has grown significantly.
- A new integration has been added.
- A refactor has finished.
- The architecture has evolved.
- Before merging an important feature.

Do not use this prompt for:

- Small bug fixes.
- Formatting reviews.
- Style corrections.

Dedicated prompts exist for those scenarios.

---

# Philosophy

Architecture is more important than implementation.

Good code inside a bad architecture will eventually become difficult to maintain.

The objective is to preserve the long-term health of the project.

Never optimize for short-term convenience if it damages the architecture.

---

# Mandatory workflow

## Step 1 — Understand the feature

Before reviewing:

Explain:

- What feature is being analysed.
- What business problem it solves.
- Which modules are involved.
- Which architectural layers participate.

---

## Step 2 — Read project documentation

Always consult:

- `.ai/README.md`
- `.ai/AGENT.md`
- Relevant architecture chapters.
- Relevant templates.
- `coding-rules.md`
- `filesystem.md`

The documentation is the project's source of truth.

---

## Step 3 — Analyse the architecture

Verify the following.

---

### Layer Separation

Confirm that every responsibility belongs to the correct layer.

Verify:

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

ApiClient

↓

Backend

No layer should bypass another.

---

### Clean Architecture

Verify:

- Dependency direction.
- Layer isolation.
- Framework independence.
- Infrastructure isolation.
- Business logic isolation.

---

### MVVM

Verify:

- Components only render UI.
- Hooks behave as ViewModels.
- Business logic lives inside UseCases.
- Infrastructure remains isolated.

---

### Repository Pattern

Verify:

- Data access is centralized.
- DTOs never escape Infrastructure.
- Domain models are returned.

---

### Dependency Injection

Verify:

- Dependencies are injected.
- No unnecessary object creation.
- No hidden dependencies.

---

### Responsibilities

Every file must have a single responsibility.

Look for:

- Components doing too much.
- Hooks becoming Controllers.
- Services containing business logic.
- Repositories validating business rules.

---

### Coupling

Identify:

- Tight coupling.
- Hidden dependencies.
- Circular dependencies.
- Strong framework dependencies.

---

### Scalability

Evaluate:

- Can this feature grow?

- Can another developer extend it easily?

- Would adding a second implementation require rewriting existing code?

---

### Reusability

Evaluate:

- Existing abstractions.
- Duplicate logic.
- Generic Components.
- Generic Hooks.
- Generic Services.

---

### Maintainability

Evaluate:

- Folder organization.
- Naming.
- Readability.
- Documentation.
- Future modifications.

---

## Step 4 — Detect architectural smells

Look for:

- God Components.
- God Hooks.
- God Services.
- Feature Envy.
- Anemic Domain.
- Shotgun Surgery.
- Circular Dependencies.
- Duplicate Responsibilities.
- Leaky Abstractions.
- Hidden Business Logic.

Explain every smell found.

---

## Step 5 — Evaluate project compliance

Compare the implementation against:

- Architecture documentation.
- Coding Rules.
- Templates.
- Design System.
- Filesystem organization.

Never compare against generic standards.

Always compare against this project's documentation.

---

## Step 6 — Suggest improvements

Every recommendation must include:

- Current situation.
- Problem.
- Architectural impact.
- Recommended improvement.
- Expected benefit.

Do not rewrite code unless explicitly requested.

---

# Things you must always verify

- Clean Architecture.
- SOLID.
- MVVM.
- Repository Pattern.
- Dependency Injection.
- Scalability.
- Reusability.
- Documentation consistency.

---

# Things you must never do

Never:

- Recommend architectural changes without justification.
- Ignore project documentation.
- Introduce unnecessary abstractions.
- Increase coupling.
- Break existing patterns.
- Suggest solutions that contradict the documented architecture.

---

# Response format

Always answer using this structure.

## 1. Architecture Summary

Explain how the feature is currently structured.

---

## 2. Strengths

List architectural strengths.

---

## 3. Weaknesses

Explain every weakness.

---

## 4. Architectural Smells

List every smell detected.

---

## 5. Compliance Report

Evaluate compliance.

Clean Architecture: %

MVVM: %

Repository Pattern: %

Coding Rules: %

Templates: %

Filesystem: %

Design System: %

Documentation: %

---

## 6. Recommendations

List every improvement.

Explain:

- Why.
- Impact.
- Priority.

---

## 7. Overall Architecture Score

Architecture: /10

Scalability: /10

Maintainability: /10

Reusability: /10

Consistency: /10

Future Proof: /10

Overall: /10

---

## 8. Final Verdict

Choose one.

✅ Architecture is healthy.

⚠️ Improvements recommended.

❌ Architectural redesign required.

---

# Definition of Done

An architecture review is complete only when:

- Every architectural layer has been analysed.
- Every recommendation is justified.
- Every architectural smell has been documented.
- Compliance with the project's documentation has been evaluated.
- A clear long-term recommendation has been provided.

Never finish the review without explaining how the architecture will evolve if the current implementation continues to grow.