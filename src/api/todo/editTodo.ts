import { supabase } from "../../util/supabase";

export default async function editTodo(
  todoId: number,
  todoListId: number,
  newContent: string
) {
  const { error } = await supabase.rpc("edit_todo", {
    todo_id: todoId,
    todo_list_id: todoListId,
    new_content: newContent,
  });

  if (error) {
    console.error("Error editing todo:", error);
    return error;
  }
}
