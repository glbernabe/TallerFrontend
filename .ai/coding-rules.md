Nunca utilizar any.

Nunca usar lógica dentro de componentes.

Todos los Hooks actúan como ViewModels.

Los DTO permanecen únicamente en Infrastructure.

Los SDK externos viven únicamente en Infrastructure/Services.

Los UseCases nunca conocen React.

Los Repository nunca conocen Google.

GoogleIdentityService es el único punto que conoce Google Identity Services.

No generar código parcial.

Generar siempre el archivo completo.

Si una decisión rompe Clean Architecture, detenerse y explicarlo antes de modificar el código.