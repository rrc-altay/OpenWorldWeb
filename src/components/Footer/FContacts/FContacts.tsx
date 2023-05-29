import React from "react";
import { FTitleSC } from "@/components/Footer/Footer.styles";
import FAItem from "@/components/Footer/FContacts/FCItem/FCItem";
import PhoneIcon from "@/assets/icons/PhoneIcon.svg";
import TimeIcon from "@/assets/icons/TimeIcon.svg";
import PlaceIcon from "@/assets/icons/PlaceIcon.svg";
import { aboutMock } from "@/lib/mock/aboutMock";
import { useFContactsStyles } from "@/components/Footer/FContacts/FContacts.styles";

const FContacts = () => {
  return (
    <ContainerSC>
      <FTitleSC variant="h2">Контакты</FTitleSC>
      <ListSC>
        <FAItem
          Icon={PhoneIcon}
          title={aboutMock.phone.formatPhone}
          href={`tel:${aboutMock.phone.number}`}
        />
        <FAItem
          Icon={TimeIcon}
          title={aboutMock.time}
        />
        <FAItem
          Icon={PlaceIcon}
          title={aboutMock.place}
        />
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, ListSC } = useFContactsStyles();

export default React.memo(FContacts);
