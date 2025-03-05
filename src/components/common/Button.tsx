import { css } from "@emotion/react";

interface Props {
  backgroundColor?: string;
  color?: string;
  border?: string;
  hover?: string;
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
}

function Button({
  backgroundColor = "#3B82F6",
  color = "white",
  border = "none",
  hover,
  icon,
  text,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 20px;
        background-color: ${backgroundColor};
        color: ${color};
        border: ${border};
        font-size: 16px;
        white-space: nowrap;
        border-radius: 12px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${hover};
        }
        @media (max-width: 1024px) {
          padding: 12px 4px;
          flex-direction: column;
          span {
            font-size: 12px;
          }
        }
      `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Button;
