import { GetPublishedNews } from "@/core/news/application/use-cases/GetPublishedNews";
import { GetNewsPage } from "@/core/news/application/use-cases/GetNewsPage";
import { GetNewsBySlug } from "@/core/news/application/use-cases/GetNewsBySlug";
import { SearchNews } from "@/core/news/application/use-cases/SearchNews";
import { NewsApiRepository } from "@/infrastructure/api/news/NewsApiRepository";

const repository = new NewsApiRepository();
export const getPublishedNews = new GetPublishedNews(repository);
export const getNewsPage = new GetNewsPage(repository);
export const getNewsBySlug = new GetNewsBySlug(repository);
export const searchNews = new SearchNews(repository);
