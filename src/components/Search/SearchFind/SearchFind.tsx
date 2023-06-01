import React from "react";
import { useSearch } from "@/hooks/useSearch";
import { SearchProps } from "@/types/types";
import { useSearchFindStyles } from "@/components/Search/SearchFind/SearchFind.styles";

const SearchFind = ({ find }: Pick<SearchProps, "find">) => {
  const { value, handleChangeValue, handleSubmit } = useSearch(find);

  return (
    <FormSC onSubmit={handleSubmit(false)}>
      <TitleContainerSC>
        <SearchIconSC />
        <TitleSC variant="h1">Результаты поиска для: {find}</TitleSC>
      </TitleContainerSC>
      <FieldContainerSC>
        <TextFieldUISC
          value={value}
          onChange={handleChangeValue}
          placeholder="Поиск"
          inputProps={{ maxLength: 256 }}
        />
        <ButtonSC type="submit">Поиск</ButtonSC>
      </FieldContainerSC>
    </FormSC>
  );
};

const {
  FormSC,
  TitleContainerSC,
  TitleSC,
  SearchIconSC,
  FieldContainerSC,
  TextFieldUISC,
  ButtonSC,
} = useSearchFindStyles();

export default React.memo(SearchFind);
