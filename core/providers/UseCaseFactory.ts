import { RepositoryFactory } from "./RepositoryFactory";

import { GetCartSummaryUseCase } from "@/infrastructure/usecases/cart/GetCartSummaryUseCase";

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