import React from "react";

const ScriptsLayout = () => {
  return (
    <>
      <script
        defer
        src="https://lidrekon.ru/slep/js/jquery.js"
      />
      <script
        defer
        src="https://lidrekon.ru/slep/js/uhpv-full.min.js"
      />
    </>
  );
};

export default React.memo(ScriptsLayout);
