import React from "react";
import { NewsModelArr } from "@/lib/models/NewsModel";
import { Button, styled } from "@mui/material";
import { useNews } from "@/components/News/useNews";
import SpinnerUI from "@/UI/SpinnerUI/SpinnerUI";
import NewsError from "@/components/News/NewsError/NewsError";
import NewsItem from "@/components/News/NewsItem/NewsItem";

type NewsProps = {
  initialNews: NewsModelArr;
};

const News = ({ initialNews }: NewsProps) => {
  const { news, hasError, isLoading, isEnd, handleLoadNews } =
    useNews(initialNews);

  return (
    <ContainerSC>
      <NewsListSC>
        {news.map((newsItem) => (
          <NewsItem
            key={newsItem.id}
            {...newsItem}
          />
        ))}
      </NewsListSC>
      <NewsError hasError={hasError} />
      {isLoading && <SpinnerUI />}
      {!isEnd && (
        <ButtonSC
          disabled={isLoading}
          onClick={handleLoadNews}>
          {hasError ? "Повторить попытку" : "Показать еще"}
        </ButtonSC>
      )}
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const NewsListSC = styled("div")`
  & > *:last-child {
    margin-bottom: 0;
  }
  margin-bottom: 30px;
`;

const ButtonSC = styled(Button)`
  margin-top: 10px;
`;

export default React.memo(News);
