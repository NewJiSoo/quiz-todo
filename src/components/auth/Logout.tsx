import { css } from "@emotion/react";
import { LogoutButton } from "../../styles/common/Sidebar";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../api/auth/auth";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      alert(`로그아웃 실패: ${error.message}`);
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <LogoutButton
      css={css`
        cursor: pointer;
      `}
      onClick={handleLogout}
    >
      로그아웃
    </LogoutButton>
  );
}

export default Logout;
