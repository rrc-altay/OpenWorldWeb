import React from "react";
import { SearchModel } from "@/lib/models/Search/SearchModel";
import { useSearchResultStyles } from "@/components/Search/SearchResult/SearchResult.styles";
import SearchItem from "@/components/Search/SearchResult/SearchItem/SearchItem";
import { getDynamicPath } from "@/lib/services/services";
import { styled } from "@mui/material";

const SearchPage = ({ page }: SearchModel[0]) => {
  return (
    <ContainerSC>
      <ContentTitleSC variant="h2">
        Количество страниц: {page.length}
      </ContentTitleSC>
      <ListSC>
        {page.map((pageItem) => (
          <SearchItem
            key={pageItem.slug}
            href={`${getDynamicPath(pageItem.path)}`}
            title={pageItem.title}
          />
        ))}
      </ListSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  margin-bottom: 20px;
`;

const { ListSC, ContentTitleSC } = useSearchResultStyles();

export default React.memo(SearchPage);
