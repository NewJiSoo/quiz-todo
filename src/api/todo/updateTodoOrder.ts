import { supabase } from "../../util/supabase";

export default async function updateTodoOrder(
  todoListId: number,
  newOrder: []
) {
  const { error } = await supabase.rpc("update_todo_order", {
    todo_list_id: todoListId,
    new_order: newOrder,
  });

  if (error) {
    console.error("Error updating todo order:", error);
    return error;
  }
}
