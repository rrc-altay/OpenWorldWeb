import React from "react";
import RusDateSSR from "@/components/RusDateSSR/RusDateSSR";
import { useSearchItemStyles } from "@/components/Search/SearchResult/SearchItem/SearchItem.styles";
import { SearchItemProps } from "@/components/Search/SearchResult/SearchItem/types";

const SearchItem = ({ href, title, description, date }: SearchItemProps) => {
  return (
    <ContainerSC>
      <WrapperSC
        href={href}
        target="_blank"
        rel="noopener noreferrer">
        <TitleSC variant="h1">{title}</TitleSC>
        {description && (
          <DescriptionSC variant="body1">{description}</DescriptionSC>
        )}
        {date && (
          <DateSC>
            <RusDateSSR created_at={date} />
          </DateSC>
        )}
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, TitleSC, DescriptionSC, DateSC } =
  useSearchItemStyles();

export default React.memo(SearchItem);
