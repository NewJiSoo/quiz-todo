import { Plus, SquareCheck } from "lucide-react";
import {
  AddTodo,
  TodoHeader,
  TodoListContainer,
  TodoListWrapper,
  TodoTitle,
} from "../../styles/todo/Todo";
import HeaderIcon from "../home/HeaderIcon";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import TodoInput from "./TodoInput";
import { useTodoStore } from "../../store/useTodoStore";
import { type TODO } from "../../@types/todo";
import getTodoList from "../../api/todo/getTodo";
import { useAuthStore } from "../../store/useAuthStore";

function TodoList() {
  const [todos, setTodos] = useState<TODO[]>([]);
  const userId = useAuthStore((state) => state.userId);
  const createTodo = useTodoStore((state) => state.createTodo);
  const setCreateTodo = useTodoStore((state) => state.setCreateTodo);

  const onClickAddContent = () => {
    setCreateTodo(true);
  };

  const handleNewTodo = (newTodo: TODO) => {
    console.log(newTodo);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newTodos = [...todos];
    const [reorderedItem] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, reorderedItem);

    setTodos(newTodos);
  };

  const fetchTodos = async () => {
    const { data, error } = await getTodoList(userId);
    if (error) {
      console.log(error);
    }
    if (data) {
      setTodos(data);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TodoListWrapper>
        <TodoHeader>
          <TodoTitle>
            <HeaderIcon icon={<SquareCheck />} backgroundColor="#34D399" />
            오늘 할 일
          </TodoTitle>
          <AddTodo onClick={onClickAddContent}>
            <Plus width={20} />
          </AddTodo>
        </TodoHeader>

        <Droppable droppableId="todoList">
          {(provided) => (
            <TodoListContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {createTodo && <TodoInput onCreateTodo={handleNewTodo} />}

              {todos.map((todo, index) => (
                <Draggable
                  key={String(todo.id)}
                  draggableId={String(todo.id)}
                  index={index}
                >
                  {(provided) => (
                    <TodoItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      text={todo.content}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </TodoListContainer>
          )}
        </Droppable>
      </TodoListWrapper>
    </DragDropContext>
  );
}

export default TodoList;
