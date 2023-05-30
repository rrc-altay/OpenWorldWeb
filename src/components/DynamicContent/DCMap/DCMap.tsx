import React from "react";
import { YMaps, Placemark } from "@pbe/react-yandex-maps";
import { aboutMock } from "@/lib/mock/aboutMock";
import { useDCMapStyles } from "@/components/DynamicContent/DCMap/DCMap.styles";

const DCMap = () => {
  return (
    <ContainerSC>
      <TitleSC
        variant="body1"
        sx={{ textAlign: "center" }}>
        БУ РА “РРЦ для детей и подростков с ограниченными возможностями”
      </TitleSC>
      <TypographySC variant="body1">
        Администрация:{"\n"}
        Республика Алтай, г. Горно-Алтайск, пр. Коммунистический 109{"\n"}
        Телефон/факс приёмной директора: +7(38822)6-23-01{"\n"}
        Стационарное отделение:{"\n"}
        Республика Алтай, г. Горно-Алтайск, пр. Коммунистический 103{"\n"}
        Телефон/факс регистратуры: +7(38822)6-46-73{"\n"}
        Отделение дневного пребывания: Республика Алтай, г. Горно-Алтайск, пр.
        Коммунистический 156{"\n"}Телефон/факс заведующего отделением:
        +7(38822)6-10-93
      </TypographySC>
      <MapContainerSC>
        <YMaps>
          <MapSC
            style={{ width: "100%" }}
            defaultState={{ center: aboutMock.placeCoordinates, zoom: 15 }}
            defaultOptions={{
              maxZoom: 17,
              minZoom: 9,
            }}>
            <Placemark
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={aboutMock.placeCoordinates}
              properties={{
                balloonContentBody: aboutMock.place,
              }}
            />
          </MapSC>
        </YMaps>
      </MapContainerSC>
      <ImageSC
        src="/assets/images/map.jpg"
        alt="Картинка 'Как к нам пройти'"
      />
    </ContainerSC>
  );
};

const { ContainerSC, TitleSC, TypographySC, MapContainerSC, MapSC, ImageSC } =
  useDCMapStyles();

export default React.memo(DCMap);
