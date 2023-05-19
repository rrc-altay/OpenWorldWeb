import { FC, ReactNode, SVGProps } from "react";

export type Children = {
  children: ReactNode;
};

export interface AboutItemProps {
  title: string;
  href?: string;
  Icon: FC<SVGProps<SVGElement>>;
}
