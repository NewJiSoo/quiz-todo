import { css } from "@emotion/react";
import {
  LogoutButton,
  ProfileCard,
  ProfileIcon,
  ProfileWrapper,
} from "../../styles/common/Sidebar";
import { EllipsisVertical } from "lucide-react";

function Profile() {
  const userEmail = "email.com";

  return (
    <ProfileWrapper>
      <ProfileIcon>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Slightly%20Smiling%20Face.png"
          alt="Slightly Smiling Face"
          width="40"
          height="40"
        />
      </ProfileIcon>
      <EllipsisVertical
        css={css`
          display: none;
          padding: 4px 0;
          color: #94a3b8;
          @media (max-width: 1024px) {
            display: block;
          }
        `}
      />
      <ProfileCard>
        <span
          css={css`
            font-weight: 600;
          `}
        >
          {userEmail}
        </span>
        <LogoutButton
          css={css`
            cursor: pointer;
          `}
        >
          로그아웃
        </LogoutButton>
      </ProfileCard>
    </ProfileWrapper>
  );
}

export default Profile;
