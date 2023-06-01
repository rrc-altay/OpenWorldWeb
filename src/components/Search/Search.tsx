import React from "react";
import { SearchProps } from "@/types/types";
import SearchResult from "@/components/Search/SearchResult/SearchResult";
import SearchFind from "@/components/Search/SearchFind/SearchFind";

const Search = ({ find, search }: SearchProps) => {
  return (
    <>
      <SearchFind find={find} />
      <SearchResult
        {...search[0]}
        {...search[1]}
      />
    </>
  );
};

export default React.memo(Search);
