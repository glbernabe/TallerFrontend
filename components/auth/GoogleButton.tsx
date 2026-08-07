"use client";

import Image from "next/image";

import SecondaryButton from "@/components/ui/SecondaryButton";

type Props = {

    onClick: () => void;

    isLoading?: boolean;

    disabled?: boolean;

    className?: string;

};

export default function GoogleButton({

    onClick,

    isLoading = false,

    disabled = false,

    className = "",

}: Props) {

    return (

        <SecondaryButton

            onClick={onClick}

            disabled={disabled || isLoading}

            className={className}

        >

            <Image

                src="/content/icons/Google_Icon.svg"

                alt="Google"

                width={20}

                height={20}

            />

            <span>

                {

                    isLoading

                        ? "Conectando..."

                        : "Continuar con Google"

                }

            </span>

        </SecondaryButton>

    );

}