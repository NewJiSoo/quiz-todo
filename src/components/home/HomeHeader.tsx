import { css } from "@emotion/react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

function HomeHeader() {
  dayjs.locale("ko");
  const today = dayjs().format("YY.MM.DD (dddd)");
  return (
    <header
      css={css`
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 16px;
      `}
    >
      {today}
    </header>
  );
}

export default HomeHeader;
