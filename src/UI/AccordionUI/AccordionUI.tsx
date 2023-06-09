import React from "react";
import {
  Accordion,
  AccordionProps,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import { Children } from "@/types/types";
import AccordionIcon from "@/assets/icons/AccordionIcon.svg";
import { Breakpoints } from "@/styles/breakpoints";

interface AccordionUIProps extends Children {
  title: string;
  nativeProps?: Partial<AccordionProps>;
}

const AccordionUI = ({ title, children, nativeProps }: AccordionUIProps) => {
  return (
    <AccordionSC {...nativeProps}>
      <AccordionSummarySC
        expandIcon={<AccordionIconSC />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <TypographySC variant="h2">{title}</TypographySC>
      </AccordionSummarySC>
      {children}
    </AccordionSC>
  );
};

const AccordionSC = styled(Accordion)`
  border: 0;
  box-shadow: none;
  margin: 0 !important;

  padding: 0 4px;

  &::before {
    display: none;
  }

  & .MuiAccordionSummary-root {
    min-height: 34px !important;
  }

  & > .MuiCollapse-root {
    //padding-top: 16px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    padding: 0;
  }
`;

const AccordionSummarySC = styled(AccordionSummary)`
  padding: 0;
  flex-direction: row-reverse;

  //background-color: red;
  
  & .MuiAccordionSummary-content {
    margin: 0 !important;
  }

  
  & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(90deg);
  },
`;

const AccordionIconSC = styled(AccordionIcon)``;

const TypographySC = styled(Typography)`
  font-size: 15px;
  line-height: 18px;
  font-weight: 800;
  margin-left: 10px;
  text-transform: uppercase;
`;

export default React.memo(AccordionUI);
