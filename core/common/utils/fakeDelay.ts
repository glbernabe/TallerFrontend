/**
 * ⚠️ SOLO DESARROLLO
 *
 * Esta utilidad simula el tiempo de respuesta
 * de una API REST.
 *
 * Cuando el proyecto utilice FastAPI + Spiga+
 * este archivo podrá eliminarse completamente.
 */

export async function fakeDelay(
    milliseconds: number = 250,
): Promise<void> {

    return new Promise((resolve) => {

        setTimeout(resolve, milliseconds);

    });

}