import NewsGrid from "./NewsGrid";
import NewsPagination from "./NewsPagination";

import type { NewsPage } from "@/core/news/domain/NewsPage";

type Props = {
    newsPage: NewsPage;
};

export default function NewsPageContent({
    newsPage,
}: Props) {
    return (
        <>
            <NewsGrid news={newsPage.items} />

            <NewsPagination
                currentPage={newsPage.page}
                pageCount={newsPage.pageCount}
            />
        </>
    );
}