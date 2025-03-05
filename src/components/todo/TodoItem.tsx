import { Check } from "lucide-react";
import {
  CheckboxLabel,
  CheckboxWrapper,
  CustomCheckbox,
  HiddenCheckbox,
  TodoContainer,
} from "../../styles/todo/Todo";

function TodoItem() {
  return (
    <TodoContainer>
      <CheckboxWrapper>
        <HiddenCheckbox type="checkbox" />
        <CustomCheckbox>
          <Check size={14} />
        </CustomCheckbox>
        <CheckboxLabel>동의합니다</CheckboxLabel>
      </CheckboxWrapper>
    </TodoContainer>
  );
}

export default TodoItem;
