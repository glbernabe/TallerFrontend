import { strapiFetch } from "./client";

export async function getNews() {
    return strapiFetch("/api/news?populate=image");
}