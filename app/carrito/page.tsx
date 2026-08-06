"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

import CartItemList from "@/components/cart/CartItemList";
import CartSummary from "@/components/cart/CartSummary";

import { useCart } from "@/hooks/cart/useCart";

export default function CartPage() {

    const {
        data: cart,
        isLoading,
        error,
    } = useCart();

    return (

        <>
            <Navbar />

            <main className="bg-neutral-950 py-24 text-white">
                <Container>
                    <div className="mx-auto max-w-5xl">
                        <h1 className="font-title text-6xl">
                            Carrito
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                            Revisa todos los servicios seleccionados antes de continuar.
                        </p>

                        <div className="mt-16 overflow-hidden rounded-sm bg-white text-black">
                            {isLoading && (

                                <div className="px-8 py-16 text-center text-neutral-500">
                                    Cargando carrito...
                                </div>

                            )}

                            {error && (

                                <div className="px-8 py-16 text-center text-neutral-500">
                                    No se ha podido cargar el carrito.
                                </div>

                            )}

                            {!isLoading && !error && cart && (

                                <>
                                    <CartItemList
                                        items={cart.items}
                                    />

                                    <CartSummary
                                        summary={cart}
                                    />
                                </>

                            )}
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </>

    );

}
