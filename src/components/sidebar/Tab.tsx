import { useNavigate } from "react-router-dom";
import { TabItem } from "../../styles/common/Sidebar";
import { css } from "@emotion/react";

interface Props {
  icon: React.ReactNode;
  text: string;
  url: string;
}

function Tab({ icon, text, url }: Props) {
  const nav = useNavigate();
  const onClick = () => {
    nav(`${url}`);
  };
  return (
    <TabItem onClick={onClick}>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 21px;
          height: 21px;
        `}
      >
        {icon}
      </div>
      <span>{text}</span>
    </TabItem>
  );
}

export default Tab;
