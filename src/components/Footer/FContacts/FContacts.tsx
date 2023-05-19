import React from "react";
import { FTitleSC } from "@/components/Footer/Footer.styles";
import FAItem from "@/components/Footer/FContacts/FCItem/FCItem";
import PhoneIcon from "@/assets/icons/PhoneIcon.svg";
import TimeIcon from "@/assets/icons/TimeIcon.svg";
import PlaceIcon from "@/assets/icons/PlaceIcon.svg";
import { about } from "@/lib/mock/about";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const FContacts = () => {
  return (
    <ContainerSC>
      <FTitleSC variant="h2">Контакты</FTitleSC>
      <ListSC>
        <FAItem
          Icon={PhoneIcon}
          title={about.phone.formatPhone}
          href={`tel:${about.phone.number}`}
        />
        <FAItem
          Icon={TimeIcon}
          title={about.time}
        />
        <FAItem
          Icon={PlaceIcon}
          title={about.place}
        />
      </ListSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  flex-shrink: 0;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    order: 2;
  }
`;

const ListSC = styled("ul")`
  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & > * {
      margin-right: 10px;
      margin-bottom: 20px;
    }

    & > *:last-child {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export default React.memo(FContacts);
