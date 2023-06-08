import React from "react";
import GosUslugiInit from "../../init/GosUslugiInit/GosUslugiInit";
import BVIInit from "@/init/BVIInit/BVIInit";

const ScriptsLayout = () => {
  return (
    <>
      <GosUslugiInit />
      <BVIInit />
    </>
  );
};

export default React.memo(ScriptsLayout);
