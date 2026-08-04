import type { CartItem } from "@/domain/cart/CartItem";
import type { ICartRepository } from "@/domain/cart/ICartRepository";

export class GetCartUseCase {

    constructor(
        private readonly repository: ICartRepository,
    ) {}

    async execute(): Promise<CartItem[]> {

        return await this.repository.getCart();

    }

}