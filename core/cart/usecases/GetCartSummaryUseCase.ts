import type { CartSummary } from "@/domain/cart/CartSummary";
import type { ICartRepository } from "@/domain/cart/ICartRepository";

import { CART_PREVIEW_LIMIT } from "@/core/common/constants/cart";

export class GetCartSummaryUseCase {

    constructor(

        private readonly repository: ICartRepository,

    ) {}

    async execute(): Promise<CartSummary> {

        const cart = await this.repository.getCart();

        return {

            ...cart,

            items: cart.items.slice(

                0,

                CART_PREVIEW_LIMIT,

            ),

            hasMoreItems:

                cart.totalItems > CART_PREVIEW_LIMIT,

        };

    }

}