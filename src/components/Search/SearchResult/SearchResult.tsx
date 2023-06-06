import React from "react";
import { SearchModel } from "@/lib/models/Search/SearchModel";
import { Typography } from "@mui/material";
import SearchNews from "@/components/Search/SearchResult/SearchNews/SearchNews";
import SearchPage from "@/components/Search/SearchResult/SearchPage/SearchPage";
import { useSearchResultStyles } from "@/components/Search/SearchResult/SearchResult.styles";

type FirstSearch = SearchModel[0];
type SecondSearch = SearchModel[1];

type SearchResultProps = Pick<FirstSearch, "page"> & Pick<SecondSearch, "news">;

const SearchResult = ({ news, page }: SearchResultProps) => {
  const searchCount = news.length + page.length;
  const isEmpty = !searchCount;

  return (
    <>
      {isEmpty && (
        <Typography variant="body1">
          К сожалению, по вашему запросу ничего не найдено. Попробуйте другие
          слова или воспользуйтесь навигацией по разделам сайта.
        </Typography>
      )}
      {!isEmpty && (
        <>
          <ContainerSC>
            <Typography
              variant="body1"
              sx={{ textIndent: "0px" }}>
              Найдено {searchCount} соответствий
            </Typography>
          </ContainerSC>
          {!!page.length && <SearchPage page={page} />}
          {!!news.length && <SearchNews news={news} />}
        </>
      )}
    </>
  );
};

const { ContainerSC } = useSearchResultStyles();
export default React.memo(SearchResult);
