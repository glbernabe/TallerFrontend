---
name: Security Review
description: Review an implementation for security vulnerabilities, authentication, authorization and data protection while respecting the project's architecture.
invokable: true
---

# Objective

This prompt must be used whenever the security of a feature, module or implementation needs to be evaluated.

The objective is to identify security vulnerabilities, authentication weaknesses, authorization issues and insecure coding practices before they reach production.

Never prioritize convenience over security.

---

# When to use this prompt

Use this prompt when:

- Reviewing authentication.
- Reviewing authorization.
- Reviewing API integrations.
- Reviewing forms.
- Reviewing external services.
- Reviewing Google Identity Services.
- Reviewing JWT authentication.
- Before deploying important features.
- Reviewing sensitive data handling.

Do not use this prompt for:

- Bug fixing.
- Refactoring.
- Performance optimization.
- New features.

Dedicated prompts exist for those tasks.

---

# Philosophy

Security is not an optional improvement.

It is a mandatory quality requirement.

Always assume that user input is untrusted.

Always validate external data.

Always follow the principle of least privilege.

Never expose sensitive information.

---

# Mandatory workflow

## Step 1 — Understand the feature

Explain:

- What the feature does.
- What data it processes.
- Which users interact with it.
- Which external services are involved.

---

## Step 2 — Read project documentation

Always consult:

- `.ai/AGENT.md`
- `.ai/README.md`
- Authentication documentation.
- Relevant architecture chapters.
- Coding Rules.

---

## Step 3 — Authentication Review

Verify:

- Authentication flow.
- Google Identity Services integration.
- JWT handling.
- Refresh Token handling.
- Session management.
- Logout process.

Never expose authentication tokens.

---

## Step 4 — Authorization Review

Verify:

- Protected resources.
- Role validation.
- Permission checks.
- Access control.
- API authorization.

Never trust the client.

Authorization must always be enforced by the backend.

---

## Step 5 — Input Validation

Verify:

- Form validation.
- API payload validation.
- File upload validation.
- Input sanitization.
- Length restrictions.
- Type validation.

Never trust user input.

---

## Step 6 — API Security

Verify:

- HTTPS assumptions.
- Authentication headers.
- Token handling.
- Error responses.
- Sensitive data exposure.
- API contracts.

---

## Step 7 — Frontend Security

Verify:

- No secrets in the frontend.
- No API keys exposed.
- No sensitive information stored unnecessarily.
- Secure storage of authentication data.

---

## Step 8 — Dependency Review

Verify:

- Outdated packages.
- Known vulnerabilities.
- Unsafe dependencies.

---

## Step 9 — Error Handling

Verify:

- Errors do not leak internal information.
- Stack traces are not exposed.
- Authentication errors are handled safely.

---

## Step 10 — Data Protection

Verify:

- Sensitive data handling.
- Personal information.
- Tokens.
- Credentials.
- Cookies.
- Local Storage usage.

Never store sensitive information without justification.

---

# Things you must always verify

- Authentication.
- Authorization.
- Input validation.
- Token handling.
- API security.
- Sensitive data.
- Dependency safety.
- Clean Architecture.

---

# Things you must never do

Never:

- Expose secrets.
- Hardcode credentials.
- Trust client validation.
- Store passwords.
- Leak tokens.
- Recommend insecure shortcuts.
- Break the authentication flow.
- Bypass backend authorization.

---

# Response format

Always answer using this structure.

## 1. Security Summary

Describe the implementation.

---

## 2. Positive Security Practices

List existing good practices.

---

## 3. Vulnerabilities

Separate findings.

### Critical

...

### High

...

### Medium

...

### Low

...

---

## 4. Recommendations

Explain every recommendation.

Include:

- Risk.
- Impact.
- Recommended solution.

---

## 5. Security Score

Authentication: /10

Authorization: /10

Input Validation: /10

API Security: /10

Sensitive Data Protection: /10

Dependency Safety: /10

Overall: /10

---

## 6. Final Verdict

Choose one.

✅ Secure.

⚠️ Improvements recommended.

❌ Critical vulnerabilities detected.

---

# Definition of Done

A security review is complete only when:

- Authentication has been reviewed.
- Authorization has been reviewed.
- Input validation has been reviewed.
- API security has been reviewed.
- Sensitive data handling has been reviewed.
- Dependency risks have been reviewed.
- Every vulnerability includes a justified recommendation.

Never approve an implementation that exposes sensitive data or weakens the project's security.