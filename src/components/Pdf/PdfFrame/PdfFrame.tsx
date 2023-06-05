import React from "react";

type PdfFrameProps = {
  src: string;
};

const PdfFrame = ({ src }: PdfFrameProps) => {
  const link = `https://docs.google.com/viewerng/viewer?url=${src}&embedded=true`;

  return (
    <iframe
      width="100%"
      height="100%"
      src={link}
      frameBorder="0"
    />
  );
};

export default React.memo(PdfFrame);
