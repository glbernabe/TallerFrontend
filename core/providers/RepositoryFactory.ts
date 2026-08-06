import type { ICartRepository } from "@/domain/cart/ICartRepository";

import { LocalCartRepository } from "@/infrastructure/repositories/cart/LocalCartRepository";

// FUTURO
// import { RestCartRepository } from "@/core/cart/repositories/RestCartRepository";

export class RepositoryFactory {

    /**
     * Repository utilizado por el carrito.
     *
     * Actualmente devuelve LocalCartRepository
     * mientras el backend no está terminado.
     *
     * Cuando FastAPI esté operativo únicamente
     * habrá que sustituir esta implementación
     * por RestCartRepository.
     */
    static createCartRepository(): ICartRepository {

        return new LocalCartRepository();

        // FUTURO
        // return new RestCartRepository();

    }

}