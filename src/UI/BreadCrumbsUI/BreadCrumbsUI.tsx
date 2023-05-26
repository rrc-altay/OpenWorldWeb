import React from "react";
import { useBreadCrumbsUIStyles } from "@/UI/BreadCrumbsUI/BreadCrumbsUI.styles";
import { BreadCrumbsUIProps } from "@/UI/BreadCrumbsUI/types";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";

const BreadCrumbsUI = ({ breadCrumbs }: BreadCrumbsUIProps) => {
  const lastIndex = breadCrumbs.length - 1;

  return (
    <ContainerSC>
      <ListSC>
        <LiSC isActive={false}>
          <LinkSC href={RoutesNamespace.HOME}>Главная&nbsp;—</LinkSC>
        </LiSC>
        {breadCrumbs.map((breadItem, index) => {
          const isLast = index === lastIndex;

          return (
            <LiSC
              key={breadItem.title}
              isActive={isLast}>
              <LinkSC href={breadItem.href}>
                &nbsp;
                {breadItem.title}
                {isLast ? "" : " —"}
              </LinkSC>
            </LiSC>
          );
        })}
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, ListSC, LiSC, LinkSC } = useBreadCrumbsUIStyles();

export default React.memo(BreadCrumbsUI);
