import React from "react";
import { gosUslugi } from "@/lib/widgets/GosUslugi";

const Index = () => {
  return (
    <div
      className="textwidget custom-html-widget"
      dangerouslySetInnerHTML={{ __html: gosUslugi }}></div>
  );
};

export default React.memo(Index);
