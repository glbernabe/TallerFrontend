import { RepositoryFactory } from "./RepositoryFactory";

import { GetCartSummaryUseCase } from "@/core/cart/usecases/GetCartSummaryUseCase";

export class UseCaseFactory {

    /**
     * Caso de uso encargado de obtener
     * el resumen del carrito.
     */
    static createGetCartSummaryUseCase() {

        return new GetCartSummaryUseCase(

            RepositoryFactory.createCartRepository()

        );

    }

}