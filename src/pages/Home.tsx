import HomeHeader from "../components/home/HomeHeader";
import TodoEdit from "../components/todo/TodoEdit";
import TodoList from "../components/todo/TodoList";
import { HomeWrapper } from "../styles/common/Layout";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <div>
        <TodoList />
        <TodoEdit />
      </div>
    </HomeWrapper>
  );
}

export default Home;
