---
name: Generate Component
description: Generate a new React Component following the project's architecture, design system and component templates.
invokable: true
---

# Objective

This prompt must be used whenever a new React Component needs to be created.

The objective is not simply to generate JSX.

The objective is to create a reusable, maintainable and scalable Component that integrates naturally with the existing project architecture.

Every generated Component must follow the project's Design System, Templates and Coding Rules.

---

# When to use this prompt

Use this prompt when creating:

- UI Components.
- Layout Components.
- Feature Components.
- Form Components.
- Dialogs.
- Overlays.
- Cards.
- Buttons.
- Navigation elements.
- Shared Components.

Do not use this prompt for:

- Hooks.
- UseCases.
- Repository implementations.
- Services.

Dedicated prompts exist for those.

---

# Philosophy

Components are responsible only for presentation.

They should never contain business logic.

Whenever logic grows, move it into a Hook (ViewModel).

Always prefer composition over large Components.

---

# Mandatory workflow

## Step 1 — Understand the requested component

Before generating code explain:

- Purpose.
- Responsibilities.
- Expected behaviour.
- Inputs.
- Outputs.

---

## Step 2 — Read project documentation

Consult:

- `.ai/AGENT.md`
- `.ai/design-system.md`
- `.ai/coding-rules.md`
- `.ai/templates/component.md`
- Relevant architecture chapters.

---

## Step 3 — Search similar Components

Search the project for:

- Similar Components.
- Shared UI elements.
- Existing styles.
- Existing layouts.

Never duplicate Components unnecessarily.

---

## Step 4 — Design the component

Explain:

- Component responsibilities.
- Required props.
- Composition strategy.
- Accessibility considerations.

---

## Step 5 — Generate the implementation

The generated Component must:

- Use TypeScript.
- Use functional Components.
- Be fully typed.
- Follow the Design System.
- Follow Tailwind conventions.
- Keep rendering logic simple.

---

# Things you must always verify

- Single Responsibility.
- Reusability.
- Accessibility.
- Correct typing.
- Design consistency.
- Component composition.

---

# Things you must never do

Never:

- Add business logic.
- Perform HTTP requests.
- Access Repository directly.
- Create Components larger than necessary.
- Duplicate UI patterns.

---

# Response format

1. Understanding

2. Component Design

3. Props

4. File Structure

5. Implementation

6. Accessibility Notes

7. Reusability Suggestions

---

# Definition of Done

The Component is complete only when:

- It follows the Design System.
- It follows the Component Template.
- It is fully typed.
- It contains no business logic.
- It is reusable.
- It is accessible.
- It integrates naturally with the existing architecture.