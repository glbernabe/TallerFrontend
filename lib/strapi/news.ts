import { strapiFetch } from "./client";
import type { StrapiNewsResponse } from "./types";
import { mapNewsResponse } from "./mappers/newsMapper";

export async function getNews() {
    const response = await strapiFetch<StrapiNewsResponse>(
        "/api/news?populate=Imagen"
    );

    return mapNewsResponse(response);
}