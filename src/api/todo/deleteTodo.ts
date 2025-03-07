import { supabase } from "../../util/supabase";

export default async function deleteTodo(todoId: number, todoListId: number) {
  const { error } = await supabase.rpc("delete_todo", {
    todo_id: todoId,
    todo_list_id: todoListId,
  });

  if (error) {
    console.error("Error deleting todo:", error);
    return error;
  }
}
