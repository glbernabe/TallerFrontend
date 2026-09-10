"use client";

import { ChangeEvent, FormEvent, useState } from "react";

function UserIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5.5 20c.7-3.5 3-5.5 6.5-5.5s5.8 2 6.5 5.5" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M6.6 3.5 9 3l2 5-2.5 1.8a16 16 0 0 0 5.2 5.2l1.8-2.5 5 2-.5 2.4c-.2 1-1.1 1.7-2.1 1.6C10.3 17.5 6.5 13.7 3.5 7.1c-.1-1 .6-1.9 1.6-2.1Z" />
        </svg>
    );
}

function MessageIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m4 20 4.2-1 10.9-10.9a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z" />
            <path d="m14.5 6.5 3 3" />
        </svg>
    );
}

function FileIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h6" />
        </svg>
    );
}

export default function WorkWithUsForm() {

    const [fileError, setFileError] = useState("");

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [submitted, setSubmitted] = useState(false);

    const handleFileChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {

        const file = event.target.files?.[0];

        setFileError("");
        setSelectedFile(null);

        if (!file) {
            return;
        }

        const isPdf =
            file.type === "application/pdf" ||
            file.name.toLowerCase().endsWith(".pdf");

        if (!isPdf) {

            setFileError(
                "Solo se permite documentos pdf."
            );

            event.target.value = "";

            return;
        }

        setSelectedFile(file);
    };


    const handleSubmit = (
        event: FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        if (!selectedFile) {
            setFileError(
                "Debes adjuntar tu currículum en formato PDF."
            );

            return;
        }

        /*
         * MOCKUP
         *
         * Más adelante:
         * - enviar datos al backend
         * - subir CV
         * - almacenar el documento
         * - enviar candidatura
         */

        console.log("Candidatura:", {
            form: new FormData(event.currentTarget),
            cv: selectedFile,
        });

        setSubmitted(true);
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="
                w-full
            "
        >

            <div
                className="
                    grid
                    gap-x-10
                    gap-y-10

                    md:grid-cols-2
                    lg:grid-cols-3
                "
            >

                {/* Nombre */}

                <div>

                    <label
                        htmlFor="name"
                        className="
                            flex
                            items-center
                            gap-4

                            font-text
                            text-sm
                            text-black/50
                        "
                    >
                        <UserIcon />

                        <span>Nombre:</span>
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="
                            mt-4
                            w-full
                            border-0
                            border-b
                            border-black/25
                            bg-transparent
                            px-0
                            pb-3
                            font-text
                            text-base
                            text-black
                            outline-none

                            transition-colors
                            duration-200

                            focus:border-black
                        "
                    />

                </div>


                {/* Email */}

                <div>

                    <label
                        htmlFor="email"
                        className="
                            flex
                            items-center
                            gap-4

                            font-text
                            text-sm
                            text-black/50
                        "
                    >
                        <EmailIcon />

                        <span>Email:</span>
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="
                            mt-4
                            w-full
                            border-0
                            border-b
                            border-black/25
                            bg-transparent
                            px-0
                            pb-3
                            font-text
                            text-base
                            text-black
                            outline-none

                            transition-colors
                            duration-200

                            focus:border-black
                        "
                    />

                </div>


                {/* Teléfono */}

                <div>

                    <label
                        htmlFor="phone"
                        className="
                            flex
                            items-center
                            gap-4

                            font-text
                            text-sm
                            text-black/50
                        "
                    >
                        <PhoneIcon />

                        <span>Teléfono:</span>
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="
                            mt-4
                            w-full
                            border-0
                            border-b
                            border-black/25
                            bg-transparent
                            px-0
                            pb-3
                            font-text
                            text-base
                            text-black
                            outline-none

                            transition-colors
                            duration-200

                            focus:border-black
                        "
                    />

                </div>

            </div>


            {/* Mensaje */}

            <div className="mt-12">

                <label
                    htmlFor="message"
                    className="
                        flex
                        items-start
                        gap-4

                        font-text
                        text-sm
                        text-black/50
                    "
                >
                    <MessageIcon />

                    <span>Mensaje:</span>
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="
                        mt-4
                        min-h-36
                        w-full
                        resize-y
                        border-0
                        border-b
                        border-black/25
                        bg-transparent
                        px-0
                        pb-3
                        font-text
                        text-base
                        leading-7
                        text-black
                        outline-none

                        transition-colors
                        duration-200

                        focus:border-black
                    "
                />

            </div>


            {/* CV */}

            <div className="mt-12">

                <label
                    htmlFor="cv"
                    className="
                        flex
                        items-center
                        gap-4

                        font-text
                        text-sm
                        text-black/50
                    "
                >
                    <FileIcon />

                    <span>Currículum:</span>
                </label>

                <div className="mt-5">

                    <label
                        htmlFor="cv"
                        className="
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-3

                            border
                            border-black/20
                            px-5
                            py-3

                            font-text
                            text-sm
                            font-medium
                            text-black

                            transition-all
                            duration-200

                            hover:border-black
                            hover:bg-black
                            hover:text-white
                        "
                    >
                        <FileIcon />

                        <span>
                            Seleccionar CV
                        </span>
                    </label>

                    <input
                        id="cv"
                        name="cv"
                        type="file"
                        accept=".pdf,application/pdf"
                        required
                        onChange={handleFileChange}
                        className="sr-only"
                    />

                    {selectedFile && (
                        <p
                            className="
                                mt-4
                                font-text
                                text-sm
                                text-black/60
                            "
                        >
                            {selectedFile.name}
                        </p>
                    )}

                    {fileError && (
                        <p
                            role="alert"
                            className="
                                mt-4
                                font-text
                                text-sm
                                text-red-600
                            "
                        >
                            {fileError}
                        </p>
                    )}

                    <p
                        className="
                            mt-3
                            font-text
                            text-xs
                            text-black/45
                        "
                    >
                        Solo se aceptan documentos PDF.
                    </p>

                </div>

            </div>


            {/* Términos */}

            <div className="mt-12">

                <label
                    className="
                        flex
                        cursor-pointer
                        items-start
                        gap-4

                        font-text
                        text-sm
                        leading-6
                        text-black/60
                    "
                >

                    <input
                        type="checkbox"
                        name="terms"
                        required
                        className="
                            mt-1
                            h-5
                            w-5
                            shrink-0
                            cursor-pointer
                            accent-black
                        "
                    />

                    <span>
                        He leído y acepto los términos y
                        condiciones de uso.
                    </span>

                </label>

            </div>


            {/* CAPTCHA MOCKUP */}

            <div className="mt-8">

                <div
                    className="
                        flex
                        w-full
                        max-w-sm
                        items-center
                        gap-4

                        border
                        border-black/15
                        bg-white

                        px-4
                        py-4
                    "
                >

                    <div
                        className="
                            h-7
                            w-7
                            shrink-0
                            border
                            border-black/50
                        "
                    />

                    <span
                        className="
                            flex-1
                            font-text
                            text-sm
                            text-black
                        "
                    >
                        No soy un robot
                    </span>

                    <span
                        className="
                            font-text
                            text-[10px]
                            uppercase
                            tracking-wide
                            text-black/40
                        "
                    >
                        reCAPTCHA
                    </span>

                </div>

                <p
                    className="
                        mt-3
                        font-text
                        text-xs
                        text-black/40
                    "
                >
                    CAPTCHA provisional. Se sustituirá por la
                    implementación definitiva posteriormente.
                </p>

            </div>


            {/* Resultado mock */}

            {submitted && (
                <p
                    role="status"
                    className="
                        mt-8
                        font-text
                        text-sm
                        text-black/70
                    "
                >
                    Candidatura preparada correctamente.
                    El envío definitivo se conectará posteriormente.
                </p>
            )}


            {/* Botones */}

            <div
                className="
                    mt-12
                    flex
                    flex-col
                    gap-4

                    sm:flex-row
                    sm:justify-end
                "
            >

                <button
                    type="reset"
                    onClick={() => {
                        setFileError("");
                        setSelectedFile(null);
                        setSubmitted(false);
                    }}
                    className="
                        min-w-40
                        border
                        border-black
                        px-8
                        py-4

                        font-text
                        text-sm
                        font-medium
                        uppercase
                        tracking-wide

                        text-black

                        transition-all
                        duration-200

                        hover:bg-black
                        hover:text-white
                    "
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="
                        min-w-40
                        border
                        border-black
                        bg-black
                        px-8
                        py-4

                        font-text
                        text-sm
                        font-medium
                        uppercase
                        tracking-wide

                        text-white

                        transition-all
                        duration-200

                        hover:bg-white
                        hover:text-black
                    "
                >
                    Enviar
                </button>

            </div>

        </form>
    );
}