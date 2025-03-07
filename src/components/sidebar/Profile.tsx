import { css } from "@emotion/react";
import {
  ProfileCard,
  ProfileIcon,
  ProfileWrapper,
} from "../../styles/common/Sidebar";
import { EllipsisVertical } from "lucide-react";
import Logout from "../auth/Logout";
import { useAuthStore } from "../../store/useAuthStore";

function Profile() {
  const userEmail = useAuthStore((state) => state.userEmail);

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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
          `}
        >
          {userEmail}
        </span>
        <Logout />
      </ProfileCard>
    </ProfileWrapper>
  );
}

export default Profile;
