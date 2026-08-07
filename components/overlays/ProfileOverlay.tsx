"use client";

import Image from "next/image";

import Overlay from "./Overlay";
import { OVERLAY } from "@/core/common/design/overlays";

import MainButton from "@/components/ui/MainButton";

import { GoogleLogin } from "@react-oauth/google";

import { LocalAuthRepository } from "@/infrastructure/repositories/auth/LocalAuthRepository";
import { LoginWithGoogleUseCase } from "@/infrastructure/usecases/auth/LoginWithGoogleUseCase";


type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ProfileOverlay({
    isOpen,
    onClose,
}: Props) {

    const repository =
        new LocalAuthRepository();

    const loginUseCase =
        new LoginWithGoogleUseCase(
            repository,
        );
    return (

        <Overlay
            isOpen={isOpen}
            onClose={onClose}
            className="justify-end"
        >

            <div
                className={`
                    ${OVERLAY.cardWidth}

                    rounded-sm

                    bg-white

                    shadow-2xl


                    transition-all
                    duration-300
                    ease-out

                    ${isOpen
                        ? "translate-y-0 opacity-100 scale-100"
                        : "-translate-y-3 opacity-0 scale-[0.985]"
                    }
                `}
            >

                {/* CABECERA */}

                <div
                    className="
                        flex
                        justify-end

                        px-8
                        pt-6
                    "
                >

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-10
                            w-10

                            items-center
                            justify-center

                            transition-opacity

                            hover:opacity-60
                        "
                        aria-label="Cerrar"
                    >

                        <Image
                            src="/content/action_button/Cancel_Icon.svg"
                            alt=""
                            width={20}
                            height={20}
                        />

                    </button>

                </div>

                {/* CONTENIDO */}

                <div
                    className="
                        px-8
                        pb-10
                    "
                >

                    <h2
                        className="
                            font-title

                            text-4xl

                            text-black
                        "
                    >
                        Mi cuenta
                    </h2>

                    <p
                        className="
                            mt-4

                            text-base

                            leading-7

                            text-neutral-600
                        "
                    >
                        Inicia sesión para acceder a tus reservas,
                        consultar el estado de tus servicios y
                        gestionar tu vehículo.
                    </p>

                    {/* Google */}

                    <div
                        className="
                            mt-10
                        "
                    >

                        <GoogleLogin

                            theme="outline"

                            size="large"

                            shape="rectangular"

                            width="100%"

                            text="continue_with"

                            onSuccess={async (response) => {

                                console.log("Respuesta de Google:");
                                console.log(response);

                                if (!response.credential) {

                                    console.log("No se recibió credential.");

                                    return;

                                }

                                console.log("Credential:");
                                console.log(response.credential);

                                await loginUseCase.execute({

                                    credential:
                                        response.credential,

                                });

                            }}

                            onError={() => {

                                console.error(
                                    "Error al iniciar sesión con Google.",
                                );

                            }}

                        />

                    </div>

                    {/* Separador */}

                    <div
                        className="
                            my-8

                            flex
                            items-center
                            gap-4
                        "
                    >

                        <div
                            className="
                                h-px
                                flex-1

                                bg-neutral-300
                            "
                        />

                        <span
                            className="
                                text-sm

                                uppercase

                                tracking-[0.15em]

                                text-neutral-500
                            "
                        >
                            o
                        </span>

                        <div
                            className="
                                h-px
                                flex-1

                                bg-neutral-300
                            "
                        />

                    </div>

                    {/* Login */}

                    <MainButton
                        href="/login"
                        className="
                            w-full
                            justify-center
                        "
                    >
                        Continuar con correo electrónico
                    </MainButton>

                    {/* Registro */}

                    <div
                        className="
                            mt-10

                            text-center
                        "
                    >

                        <p
                            className="
                                text-sm

                                text-neutral-500
                            "
                        >
                            ¿Aún no tienes una cuenta?
                        </p>

                        <a
                            href="/register"
                            className="
                                mt-3
                                inline-flex

                                text-sm

                                font-medium

                                text-black

                                transition-opacity

                                hover:opacity-60
                            "
                        >
                            Crear cuenta
                        </a>

                    </div>

                </div>

            </div>

        </Overlay>

    );

}