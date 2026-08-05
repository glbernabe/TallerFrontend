import type { CartItem } from "./CartItem";

export interface CartSummary {

    /**
     * Todos los servicios del carrito
     */
    items: CartItem[];

    /**
     * Precio total
     */
    total: number;

    /**
     * Número total de servicios
     */
    totalItems: number;


}