import { SquareCheck } from "lucide-react";
import {
  TodoListContainer,
  TodoListWrapper,
  TodoTitle,
} from "../../styles/todo/Todo";
import HeaderIcon from "../home/HeaderIcon";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <TodoListWrapper>
      <TodoTitle>
        <HeaderIcon icon={<SquareCheck />} backgroundColor="#34D399    " />
        오늘 할 일
      </TodoTitle>
      <TodoListContainer>
        <TodoItem />
      </TodoListContainer>
    </TodoListWrapper>
  );
}

export default TodoList;
