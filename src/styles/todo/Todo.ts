import styled from "@emotion/styled";

export const TodoListWrapper = styled.div`
  min-width: 306px;
  min-height: 250px;
  padding: 16px 24px;
  background-color: white;
  border: 1px solid white;
  border-radius: 12px;
`;

export const TodoTitle = styled.header`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TodoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, border-color 0.2s;

  /* 체크된 상태 */
  ${HiddenCheckbox}:checked + & {
    background-color: #3b82f6;
    border-color: #3b82f6;
  }

  /* 체크된 상태의 체크 표시 */
  ${HiddenCheckbox}:checked + & svg {
    display: block;
  }

  svg {
    display: none;
    color: white;
  }
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: #333;
  transition: color 0.2s, text-decoration 0.2s;

  /* 체크된 상태 */
  ${HiddenCheckbox}:checked + ${CustomCheckbox} + & {
    color: #94a3b8;
    text-decoration: line-through;
  }
`;
