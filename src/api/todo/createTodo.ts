import { supabase } from "../../util/supabase";

export default async function createTodo(userId: string, content: string) {
  const { data, error } = await supabase.rpc("create_todo", {
    p_user_id: userId,
    p_content: content,
  });

  if (error) {
    console.error("Error creating todo:", error);
    return { data: null, error };
  }

  if (Array.isArray(data) && data.length > 0) {
    return { data: data[0], error: null };
  }

  return { data: null, error: null };
}
