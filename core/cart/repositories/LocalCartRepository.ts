import type { CartSummary } from "@/domain/cart/CartSummary";
import type { ICartRepository } from "@/domain/cart/ICartRepository";

import { mockCart } from "../mock/mockCart";

import { fakeDelay } from "@/core/common/utils/fakeDelay";
import { CART_PREVIEW_LIMIT } from "@/core/common/constants/cart";

/**
 * ⚠️ SOLO DESARROLLO
 *
 * Este repositorio únicamente existe mientras
 * FastAPI todavía no está conectado.
 *
 * En producción será sustituido por:
 *
 * RestCartRepository
 */

export class LocalCartRepository
implements ICartRepository {

    async getCart(): Promise<CartSummary> {

        await fakeDelay();

        const total = mockCart.reduce(

            (sum, item) =>

                sum + (item.price * item.quantity),

            0,

        );

        return {

            items: [...mockCart],

            total,

            totalItems: mockCart.length,

            hasMoreItems:

                mockCart.length > CART_PREVIEW_LIMIT,

        };

    }

}