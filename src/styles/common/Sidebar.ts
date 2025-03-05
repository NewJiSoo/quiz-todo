import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
  width: 280px;
  height: 100vh;
  display: flex;
  background-color: white;
  padding: 20px;
  flex-direction: column;
  justify-content: start;
  gap: 20px;

  transition: width 0.2s ease-in-out;

  @media (max-width: 1024px) {
    width: 75px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 1024px) {
    gap: 8px;
  }
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: #eff6ff;
  border: #eff6ff;
  border-radius: 12px;

  @media (max-width: 1024px) {
    background-color: white;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  width: fit-content;
  padding: 0;
  border: none;
  background-color: white;
  color: #94a3b8;
  font-size: 14px;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid #e2e8f0;
  padding: 4px 0;
`;

export const TabItem = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  padding: 14px;
  white-space: nowrap;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
    border: #f1f5f9;
    border-radius: 12px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    span {
      font-size: 12px;
    }
  }
`;
