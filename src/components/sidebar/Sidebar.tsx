import { GraduationCap, House, Leaf, ListTodo } from "lucide-react";
import Profile from "./Profile";
import Button from "../common/Button";
import Tab from "./Tab";
import { SidebarWrapper, TabWrapper } from "../../styles/common/Sidebar";
import SidebarTop from "./SidebarTop";

function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarTop />
      <Profile />
      <Button
        text="퀴즈 풀기"
        hover="#2563EB"
        icon={<Leaf width={20} height={20} />}
      />
      <TabWrapper>
        <Tab text="대시보드" icon={<House width={20} height={20} />} url="/" />
        <Tab
          text="할 일 목록"
          icon={<ListTodo width={20} height={20} />}
          url="/quiz-list"
        />
        <Tab
          text="퀴즈 목록"
          icon={<GraduationCap width={20} height={20} />}
          url="/quiz-list"
        />
      </TabWrapper>
    </SidebarWrapper>
  );
}

export default Sidebar;
