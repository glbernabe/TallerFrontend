---
description: Enforce the project's Clean Architecture and layer separation.
---

This project follows Clean Architecture strictly.

Before implementing any feature:

- Identify every affected layer.
- Respect the project's dependency direction.
- Never bypass the architecture.
- Never place business logic inside React Components.
- Never perform HTTP requests outside Repository or ApiClient.
- Always follow the architecture documented inside `.ai/`.

If the requested implementation requires modifying the architecture, explain the impact first and request confirmation before continuing.