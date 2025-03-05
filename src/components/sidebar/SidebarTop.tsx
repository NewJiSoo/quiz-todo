import { css } from "@emotion/react";
import Logo from "../../assets/QLogo.svg";
import LogoSm from "../../assets/Q-T.svg";
import { Link } from "react-router-dom";

function SidebarTop() {
  return (
    <Link
      to={"/"}
      css={css`
        display: flex;
        justify-content: start;
        width: fit-content;
      `}
    >
      <img
        src={Logo}
        alt="quiz todo 로고"
        css={css`
          height: 20px;
          @media (max-width: 1024px) {
            display: none;
          }
        `}
      />
      <img
        src={LogoSm}
        alt="quiz todo 로고"
        css={css`
          height: 20px;
          display: none;
          padding: 0 10px;
          @media (max-width: 1024px) {
            display: block;
            margin: 0 auto;
          }
        `}
      />
    </Link>
  );
}

export default SidebarTop;
