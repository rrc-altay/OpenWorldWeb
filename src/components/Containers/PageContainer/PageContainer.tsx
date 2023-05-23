import React from "react";
import { BreadCrumbsUIProps } from "@/UI/BreadCrumbsUI/types";
import BreadCrumbsUI from "@/UI/BreadCrumbsUI/BreadCrumbsUI";
import { usePageContainerStyles } from "@/components/Containers/PageContainer/PageContainer.styles";
import { CatalogProps, Children } from "@/types/types";
import AsideContainer from "@/components/Containers/AsideContainer/AsideContainer";

export type PageContainerProps = BreadCrumbsUIProps & Children & CatalogProps;

const PageContainer = ({
  breadCrumbs,
  catalog,
  children,
}: PageContainerProps) => {
  return (
    <section className="container-main">
      <BreadCrumbContainerSC>
        <BreadCrumbsUI breadCrumbs={breadCrumbs} />
      </BreadCrumbContainerSC>
      <AsideContainer catalog={catalog}>
        <ChildrenSC className="container-main-two p-0">{children}</ChildrenSC>
      </AsideContainer>
    </section>
  );
};

const { BreadCrumbContainerSC, ChildrenSC } = usePageContainerStyles();

export default React.memo(PageContainer);
