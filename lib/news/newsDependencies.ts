import { GetPublishedNews } from "@/core/news/application/use-cases/GetPublishedNews";
import { GetNewsPage } from "@/core/news/application/use-cases/GetNewsPage";
import { GetNewsBySlug } from "@/core/news/application/use-cases/GetNewsBySlug";
import { SearchNews } from "@/core/news/application/use-cases/SearchNews";

import { NewsApiRepository } from "@/infrastructure/api/news/NewsApiRepository";

const newsRepository = new NewsApiRepository();

export const getPublishedNews = new GetPublishedNews(newsRepository);
export const getNewsPage = new GetNewsPage(newsRepository);
export const getNewsBySlug = new GetNewsBySlug(newsRepository);
export const searchNews = new SearchNews(newsRepository);
