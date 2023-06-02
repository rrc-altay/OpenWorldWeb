import React from "react";
import { GosUslugiStyles } from "@/components/GosUslugi/GosUslugi.styles";
import gosUslugiScript from "@/components/GosUslugi/gosUslugiScript";

// TODO: Менять порядок тегов запрещено

const GosUslugi = () => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://pos.gosuslugi.ru/bin/script.min.js" />
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
              <span className="bf-2__text bf-2_text_small">
                Столкнулись с проблемой&nbsp;— сообщите о ней!
              </span>
            </div>

            <div className="bf-2__btn-wrap">
              {/* pos-banner-btn_2 не удалять; другие классы не добавлять */}
              <button
                className="pos-banner-btn_2"
                type="button">
                Сообщить о проблеме
              </button>
            </div>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: gosUslugiScript }} />
    </>
  );
};

export default React.memo(GosUslugi);
