import React, { useEffect, useState } from "react";
import { getRusDate } from "@/lib/services/services";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

interface RusDateSSRProps {
  created_at: string;
}

const RusDateSSR = ({ created_at }: RusDateSSRProps) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    if (created_at) {
      setDate(getRusDate(created_at));
    }
  }, [created_at]);

  return <DateSC>Опубликовано: {date}</DateSC>;
};

const DateSC = styled("time")`
  display: block;
  color: ${ColorScheme.GRAY_LIGHT};

  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: right;
`;

export default React.memo(RusDateSSR);
