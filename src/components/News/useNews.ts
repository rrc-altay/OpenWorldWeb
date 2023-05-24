import { useState } from "react";
import { PAGE_LIMIT, PAGE_START } from "@/lib/constants";
import { NewsModelArr } from "@/lib/models/NewsModel";
import { fetchGetNews } from "@/lib/api/get/fetchGetNews";

const INITIAL_PAGE = PAGE_START + 1;

export const useNews = (initialNews: NewsModelArr) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(initialNews.length < PAGE_LIMIT);
  const [hasError, setHasError] = useState<string>("");

  const [page, setPage] = useState<number>(INITIAL_PAGE);
  const [news, setNews] = useState<NewsModelArr>(initialNews);

  const handleLoadNews = async () => {
    setIsLoading(true);
    setHasError("");

    fetchGetNews(page)
      .then((response) => {
        if (response.data.results.length < PAGE_LIMIT) {
          setIsEnd(true);
        }

        setPage((prevState) => prevState + 1);
        setNews((prevState) => [...prevState, ...response.data.results]);
      })
      .catch(() => {
        setHasError("Ошибка загрузки новостей.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    news,
    isEnd,
    hasError,
    isLoading,
    handleLoadNews,
  };
};
