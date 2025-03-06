import { Check, Pencil, X } from "lucide-react";
import {
  CheckboxLabel,
  CheckboxWrapper,
  CustomCheckbox,
  EditTodo,
  HiddenCheckbox,
  TodoContainer,
} from "../../styles/todo/Todo";
import { forwardRef } from "react";
import { css } from "@emotion/react";

const TodoItem = forwardRef<HTMLLIElement, { text: string }>(
  ({ text, ...props }, ref) => {
    return (
      <TodoContainer ref={ref} {...props}>
        <CheckboxWrapper>
          <HiddenCheckbox type="checkbox" />
          <CustomCheckbox>
            <Check size={16} />
          </CustomCheckbox>
          <CheckboxLabel>{text}</CheckboxLabel>
        </CheckboxWrapper>
        <div
          css={css`
            display: flex;
            gap: 4px;
          `}
        >
          <EditTodo>
            <Pencil size={14} />
          </EditTodo>
          <EditTodo bgColor="#DBEAFE" color="#60A5FA">
            <X size={16} />
          </EditTodo>
        </div>
      </TodoContainer>
    );
  }
);

export default TodoItem;
