import type { CartSummary } from "@/domain/cart/CartSummary";
import type { ICartRepository } from "@/domain/cart/ICartRepository";

export class GetCartUseCase {

    constructor(
        private readonly repository: ICartRepository,
    ) {}

    async execute(): Promise<CartSummary> {

        return await this.repository.getCart();

    }

}
