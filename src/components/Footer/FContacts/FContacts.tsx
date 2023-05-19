import React from "react";
import { FTitleSC } from "@/components/Footer/Footer.styles";
import FAItem from "@/components/Footer/FContacts/FCItem/FCItem";
import PhoneIcon from "@/assets/icons/PhoneIcon.svg";
import TimeIcon from "@/assets/icons/TimeIcon.svg";
import PlaceIcon from "@/assets/icons/PlaceIcon.svg";
import { about } from "@/lib/mock/about";
import { styled } from "@mui/material";

const FContacts = () => {
  return (
    <div>
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
    </div>
  );
};

const ListSC = styled("ul")`
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default React.memo(FContacts);
