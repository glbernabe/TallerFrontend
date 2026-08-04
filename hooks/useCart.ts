"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { UseCaseFactory } from "@/core/providers/UseCaseFactory";

import type { AsyncState } from "@/core/common/models/UiState";
import type { CartSummary as CartSummaryModel } from "@/domain/cart/CartSummary";

export function useCart(
    isEnabled = true,
): AsyncState<CartSummaryModel> {

    const [data, setData] =
        useState<CartSummaryModel | null>(null);

    const [isLoading, setIsLoading] =
        useState(false);

    const [error, setError] =
        useState<Error | null>(null);

    const getCartSummaryUseCase = useMemo(

        () => UseCaseFactory.createGetCartSummaryUseCase(),

        [],

    );

    const reload = useCallback(async () => {

        setIsLoading(true);

        setError(null);

        try {

            const summary =
                await getCartSummaryUseCase.execute();

            setData(summary);

        } catch (err) {

            setError(err as Error);

        } finally {

            setIsLoading(false);

        }

    }, [getCartSummaryUseCase]);

    useEffect(() => {

        if (!isEnabled) return;

        reload();

    }, [isEnabled, reload]);

    return {

        data,

        isLoading,

        error,

        reload,

    };

}