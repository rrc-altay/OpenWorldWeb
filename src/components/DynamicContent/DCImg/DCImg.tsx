import React from "react";
import ImageWrapperSC from "@/components/Wrappers/ImageWrapperSC/ImageWrapperSC";
import { ContentImgModel } from "@/lib/models/DynamicContent/properties/ContentImgModel";
import { BASE_URL } from "@/lib/constants";

const DCImg = ({ alt, url }: ContentImgModel) => {
  return (
    <ImageWrapperSC
      src={`${BASE_URL}${url}`}
      alt={alt}
    />
  );
};

export default React.memo(DCImg);
