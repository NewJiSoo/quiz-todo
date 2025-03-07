import { useEffect, useRef } from "react";
import { useTodoStore } from "../../store/useTodoStore";
import {
  CheckboxWrapper,
  CustomCheckbox,
  TodoContainer,
} from "../../styles/todo/Todo";
import { useAuthStore } from "../../store/useAuthStore";
import createTodo from "../../api/todo/createTodo";
import { type TODO } from "../../@types/todo";

interface TodoInputProps {
  onCreateTodo: (todo: TODO) => void;
}

function TodoInput({ onCreateTodo }: TodoInputProps) {
  const userId = useAuthStore((state) => state.userId);
  const newTodo = useTodoStore((state) => state.newTodo);
  const setNewTodo = useTodoStore((state) => state.setNewTodo);
  const setCreateTodo = useTodoStore((state) => state.setCreateTodo);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleCreateTodo = async () => {
    if (newTodo.trim() === "") return;

    const { data, error } = await createTodo(userId, newTodo);

    if (error) {
      console.log(error);
    }
    if (data) {
      onCreateTodo(data);
    }
    setNewTodo("");
    setCreateTodo(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      handleCreateTodo();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCreateTodo();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <TodoContainer>
      <CheckboxWrapper>
        <CustomCheckbox />
        <input
          ref={inputRef}
          value={newTodo}
          onChange={onChangeInput}
          onKeyDown={handleKeyPress}
        />
      </CheckboxWrapper>
    </TodoContainer>
  );
}

export default TodoInput;
