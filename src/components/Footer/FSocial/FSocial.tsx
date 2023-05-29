import React from "react";
import { FTitleSC } from "@/components/Footer/Footer.styles";
import { aboutMock } from "@/lib/mock/aboutMock";
import { useFSocialStyles } from "@/components/Footer/FSocial/FSocial.styles";

const FSocial = () => {
  return (
    <ContainerSC>
      <FTitleSC variant="h2">Социальные сети</FTitleSC>
      <ListSC>
        {aboutMock.social.map((socialItem) => (
          <ItemSC key={socialItem.src}>
            <LinkSC
              href={socialItem.href}
              rel="noopener noreferer noreferrer"
              target="_blank">
              <ImgSC
                src={"/assets/images/" + socialItem.src}
                alt={socialItem.name}
              />
            </LinkSC>
          </ItemSC>
        ))}
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, ListSC, ItemSC, LinkSC, ImgSC } = useFSocialStyles();

export default React.memo(FSocial);
