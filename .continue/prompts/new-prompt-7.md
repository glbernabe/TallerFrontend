---
name: Project Audit
description: Perform a complete engineering audit of the entire project, evaluating architecture, maintainability, scalability, security, performance and documentation.
invokable: true
---

# Objective

This prompt performs a complete engineering audit of the project.

Its objective is to evaluate the overall health of the codebase, identify architectural problems, technical debt and future risks, and provide actionable recommendations.

This is not a code review.

This is not an architecture review.

This is a complete project assessment.

Always evaluate the project as a whole instead of individual files.

---

# When to use this prompt

Use this prompt:

- Before releasing a major version.
- Before deploying to production.
- Before large refactors.
- After implementing multiple features.
- Every few weeks during development.
- Before inviting new developers.
- Whenever the long-term health of the project should be evaluated.

Do not use this prompt for reviewing a single file.

Dedicated prompts exist for that.

---

# Philosophy

A healthy project is not measured by the number of features.

It is measured by:

- Maintainability.
- Consistency.
- Simplicity.
- Scalability.
- Documentation.
- Architectural integrity.

Always think long term.

---

# Mandatory workflow

## Step 1 — Understand the project

Summarize:

- Project purpose.
- Main technologies.
- Overall architecture.
- Current maturity.

---

## Step 2 — Read project documentation

Always consult:

- `.ai/README.md`
- `.ai/AGENT.md`
- `.ai/CONTEXT.md`
- `.ai/CHECKLIST.md`
- Architecture chapters.
- Templates.
- Coding Rules.
- Filesystem.
- Design System.
- Roadmap.
- Decisions.

Documentation is always the source of truth.

---

## Step 3 — Architecture Audit

Evaluate:

- Clean Architecture.
- Layer separation.
- MVVM.
- Repository Pattern.
- Dependency Injection.
- Folder organization.
- Dependency direction.
- Module boundaries.

---

## Step 4 — Code Quality Audit

Evaluate:

- Naming consistency.
- Responsibility separation.
- Duplication.
- Readability.
- Type safety.
- Cohesion.
- Coupling.

---

## Step 5 — Component Audit

Review:

- Components.
- Hooks.
- UseCases.
- Repository implementations.
- Services.
- DTOs.
- Mappers.
- Domain models.

Identify:

- Oversized files.
- Wrong responsibilities.
- Duplicate implementations.

---

## Step 6 — Performance Audit

Evaluate:

- Rendering.
- State management.
- Bundle size.
- API usage.
- Expensive operations.
- Scalability.

---

## Step 7 — Security Audit

Review:

- Authentication.
- Authorization.
- Tokens.
- Secrets.
- Validation.
- Sensitive data.
- API security.

---

## Step 8 — Documentation Audit

Verify:

- Documentation matches implementation.
- Templates remain valid.
- Architecture documentation remains accurate.
- Decisions are documented.
- Roadmap reflects current status.

---

## Step 9 — Technical Debt

Identify:

- Dead code.
- Deprecated implementations.
- TODOs.
- Duplicate logic.
- Temporary solutions.
- Legacy code.
- Unused dependencies.
- Large files.
- Architectural shortcuts.

---

## Step 10 — Scalability Review

Evaluate:

- Ease of adding new features.
- Ease of replacing implementations.
- Ease of testing.
- Ease of onboarding developers.
- Future maintainability.

---

## Step 11 — Improvement Roadmap

Prioritize improvements.

### Immediate

Critical issues.

---

### Short Term

Should be addressed soon.

---

### Medium Term

Architectural improvements.

---

### Long Term

Future scalability.

---

# Things you must always verify

Always evaluate:

- Clean Architecture.
- SOLID.
- MVVM.
- Repository Pattern.
- Dependency Injection.
- Coding Rules.
- Templates.
- Documentation.
- Security.
- Performance.
- Accessibility.
- SEO.
- Scalability.

---

# Things you must never do

Never:

- Review only individual files.
- Ignore project documentation.
- Recommend unnecessary abstractions.
- Suggest breaking existing architecture.
- Ignore technical debt.
- Evaluate only code style.

Always think about the project as a complete system.

---

# Response format

Always answer using this structure.

## 1. Executive Summary

Provide a high-level overview of the project's current state.

---

## 2. Overall Health

Summarize:

Architecture

Maintainability

Documentation

Performance

Security

Scalability

Developer Experience

---

## 3. Strengths

List the strongest aspects of the project.

---

## 4. Weaknesses

List architectural weaknesses.

Technical debt.

Risky areas.

Documentation gaps.

---

## 5. Audit Results

### Architecture

...

### Code Quality

...

### Performance

...

### Security

...

### Documentation

...

### Scalability

...

### Accessibility

...

### SEO

...

---

## 6. Technical Debt Report

List:

- Dead code.
- Duplicate code.
- Legacy patterns.
- Architectural smells.
- Large files.
- Missing documentation.

---

## 7. Prioritized Recommendations

Separate recommendations by priority.

### Critical

Must be addressed immediately.

---

### High

Should be addressed soon.

---

### Medium

Recommended improvements.

---

### Low

Optional improvements.

---

## 8. Project Quality Score

Architecture: /10

Maintainability: /10

Readability: /10

Documentation: /10

Performance: /10

Security: /10

Accessibility: /10

SEO: /10

Scalability: /10

Developer Experience: /10

Overall: /10

---

## 9. Future Risks

Explain:

- What could become problematic as the project grows.
- Which modules require attention.
- Which architectural decisions may need revision in the future.

---

## 10. Final Verdict

Choose one.

✅ Excellent engineering foundation.

⚠️ Healthy project with recommended improvements.

❌ Significant engineering issues detected.

---

# Definition of Done

A project audit is complete only when:

- Every major engineering area has been evaluated.
- Documentation has been compared against the implementation.
- Technical debt has been identified.
- Architectural integrity has been assessed.
- Risks have been documented.
- Every recommendation is justified and prioritized.
- A long-term roadmap for improvement has been proposed.

Never finish an audit without providing both an objective assessment of the current state and a clear plan for future improvements.