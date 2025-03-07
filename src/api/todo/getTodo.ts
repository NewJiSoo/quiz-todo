import { supabase } from "../../util/supabase";

export default async function getTodoList(userId: string) {
  const { data, error } = await supabase.rpc("get_todo", {
    user_id: userId,
  });

  if (error) {
    console.error("Error fetching todos:", error);
    return { data: null, error };
  }

  return { data, error: null };
}
