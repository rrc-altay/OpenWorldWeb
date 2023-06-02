import React from "react";
import { GosUslugiStyles } from "@/components/GosUslugi/GosUslugi.styles";
import { useGosUslugi } from "@/components/GosUslugi/useGosUslugi";

// TODO: Виджет разбит на 4 части
// 1 - Внешний скрипт подключается в файле ScriptsLayout.tsx
// 2 - Верстка находится в этом файле
// 3 - Стили находятся в GosUslugi.styles.ts (и подключаются на 14 сроке)
// 4 - Логика находится в useGosUslugi
// 5 - Используется store для получения window.Widget

const GosUslugi = () => {
  useGosUslugi();

  return (
    <div id="gos-uslugi-widget">
      <GosUslugiStyles />
      <div id="js-show-iframe-wrapper">
        <div className="pos-banner-fluid bf-2">
          <div className="bf-2__decor">
            <div className="bf-2__logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="bf-2__logo"
                src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg"
                alt="Госуслуги"
              />
              <div className="bf-2__slogan">Решаем вместе</div>
            </div>
          </div>
          <div className="bf-2__content">
            <div className="bf-2__description">
              <span className="bf-2__text">
                Не убран мусор, яма на дороге, не горит фонарь?
              </span>
              <span className="bf-2_text bf-2_text_small">
                Столкнулись с проблемой&nbsp;— сообщите о ней!
              </span>
            </div>

            <div className="bf-2__btn-wrap">
              <button
                className="pos-banner-btn_2"
                type="button">
                Сообщить о проблеме
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GosUslugi);
