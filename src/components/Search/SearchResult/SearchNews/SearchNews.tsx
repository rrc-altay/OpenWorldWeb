import React from "react";
import SearchItem from "@/components/Search/SearchResult/SearchItem/SearchItem";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";
import { useSearchResultStyles } from "@/components/Search/SearchResult/SearchResult.styles";
import { SearchModel } from "@/lib/models/Search/SearchModel";

const SearchNews = ({ news }: SearchModel[1]) => {
  return (
    <>
      <ContentTitleSC variant="h2">
        Количество новостей: {news.length}
      </ContentTitleSC>
      <ListSC>
        {news.map((newsItem) => (
          <SearchItem
            key={newsItem.id}
            href={`${RoutesNamespace.NEWS}/${newsItem.id}`}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.created_at}
          />
        ))}
      </ListSC>
    </>
  );
};

const { ListSC, ContentTitleSC } = useSearchResultStyles();

export default React.memo(SearchNews);
