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
import { supabase } from "../../util/supabase";
import { Database } from "../../../types_db";

function TodoList() {
  const [todos, setTodos] = useState<
    Database["public"]["Tables"]["todo"]["Row"][]
  >([]);
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newTodos = [...todos];
    const [reorderedItem] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, reorderedItem);

    setTodos(newTodos);
  };

  const fetchTodos = async () => {
    const { data, error } = await supabase.from("todo").select("*");
    if (error) {
      alert(error.message);
      return;
    }
    setTodos(data);
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
          <AddTodo>
            <Plus width={20} />
          </AddTodo>
        </TodoHeader>

        <Droppable droppableId="todoList">
          {(provided) => (
            <TodoListContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
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
