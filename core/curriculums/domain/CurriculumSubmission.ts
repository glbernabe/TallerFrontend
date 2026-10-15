/** Data sent when a candidate submits their CV through the website. */
export type CurriculumSubmission = {
    nombre: string;
    email: string;
    mensaje: string;
    archivo: File;
};
