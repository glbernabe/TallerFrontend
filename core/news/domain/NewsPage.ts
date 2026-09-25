import type { News } from "./News";

export type NewsPage = {
    items: News[];
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
};