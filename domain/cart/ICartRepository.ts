import type { CartSummary } from "./CartSummary";

export interface ICartRepository {

    getCart(): Promise<CartSummary>;

}