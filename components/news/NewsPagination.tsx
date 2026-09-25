import {Link} from "@/i18n/navigation";

type Props = {
    currentPage: number;
    pageCount: number;
};

export default function NewsPagination({
    currentPage,
    pageCount,
}: Props) {
    if (pageCount <= 1) {
        return null;
    }

    const hasPrevious = currentPage > 1;
    const hasNext = currentPage < pageCount;

    return (
        <nav
            className="
                mt-16
                flex
                items-center
                justify-center
                gap-3
            "
            aria-label="Paginación de noticias"
        >
            {hasPrevious && (
                <Link
                    href={{
                        pathname: "/noticias",
                        query: {
                            page: currentPage - 1,
                        },
                    }}
                    className="
                        border
                        border-black
                        px-5
                        py-3
                        font-text
                        text-sm
                        transition-colors
                        hover:bg-black
                        hover:text-white
                    "
                >
                    Anterior
                </Link>
            )}

            <span
                className="
                    px-4
                    font-text
                    text-sm
                    text-black/60
                "
            >
                {currentPage} / {pageCount}
            </span>

            {hasNext && (
                <Link
                    href={{
                        pathname: "/noticias",
                        query: {
                            page: currentPage + 1,
                        },
                    }}
                    className="
                        border
                        border-black
                        px-5
                        py-3
                        font-text
                        text-sm
                        transition-colors
                        hover:bg-black
                        hover:text-white
                    "
                >
                    Siguiente
                </Link>
            )}
        </nav>
    );
}