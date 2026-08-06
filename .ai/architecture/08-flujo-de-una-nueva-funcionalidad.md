# 8. Flujo de una nueva funcionalidad

## Objetivo

Toda funcionalidad nueva sigue exactamente el mismo proceso.

Nunca comenzar implementando un componente.

---

## Orden recomendado

1.

Analizar el dominio.

↓

2.

Crear modelos.

↓

3.

Crear interfaces.

↓

4.

Crear DTO.

↓

5.

Crear Mapper.

↓

6.

Crear Repository.

↓

7.

Crear Services.

↓

8.

Crear UseCase.

↓

9.

Crear Hook.

↓

10.

Crear Component.

↓

11.

Crear Tests.

↓

12.

Actualizar documentación.

---

## Ejemplo

Nueva funcionalidad:

Reservas.

↓

Reservation

↓

IReservationRepository

↓

ReservationDto

↓

ReservationMapper

↓

RestReservationRepository

↓

CreateReservationUseCase

↓

useReservation

↓

ReservationForm

---

## Beneficios

Todos los módulos tendrán la misma estructura.

La curva de aprendizaje disminuye.

La IA podrá generar código mucho más consistente.