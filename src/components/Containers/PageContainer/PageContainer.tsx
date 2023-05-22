import React from "react";
import { BreadCrumbsUIProps } from "@/UI/BreadCrumbsUI/types";
import BreadCrumbsUI from "@/UI/BreadCrumbsUI/BreadCrumbsUI";
import { usePageContainerStyles } from "@/components/Containers/PageContainer/PageContainer.styles";
import { Children } from "@/types/types";

type PageContainerProps = BreadCrumbsUIProps & Children;

const PageContainer = ({ breadCrumbs, children }: PageContainerProps) => {
  return (
    <section className="container-main">
      <BreadCrumbContainerSC>
        <BreadCrumbsUI breadCrumbs={breadCrumbs} />
      </BreadCrumbContainerSC>
      <ContentSC>
        <AsideSC>aside</AsideSC>
        <ChildrenSC className="container-main-two p-0">{children}</ChildrenSC>
        <AsideSC>aside</AsideSC>
      </ContentSC>
    </section>
  );
};

const { BreadCrumbContainerSC, ContentSC, AsideSC, ChildrenSC } =
  usePageContainerStyles();

export default React.memo(PageContainer);
