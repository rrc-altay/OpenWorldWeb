import React from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";

const NewsId = ({ id }: NewsModel) => {
  return (
    <BoxWrapper title="Учитель-дефектолог провела занятие для родителей школы «Академия семьи»">
      <h1>{id}</h1>
    </BoxWrapper>
  );
};

export default React.memo(NewsId);
