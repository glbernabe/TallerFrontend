export interface AsyncState<T> {

    /**
     * Información obtenida.
     */
    data: T | null;

    /**
     * Indica si se está cargando.
     */
    isLoading: boolean;

    /**
     * Error producido durante la carga.
     */
    error: Error | null;

    /**
     * Fuerza una nueva carga.
     */
    reload(): Promise<void>;

}