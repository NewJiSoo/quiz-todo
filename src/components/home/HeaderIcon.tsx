import { css } from "@emotion/react";

interface Props {
  icon: React.ReactNode;
  backgroundColor: string;
}

function HeaderIcon({ icon, backgroundColor }: Props) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${backgroundColor};
        border-radius: 15px;
        padding: 8px;
        margin-right: 8px;
        color: white;
      `}
    >
      {icon}
    </div>
  );
}

export default HeaderIcon;
