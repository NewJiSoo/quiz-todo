import { supabase } from "../../util/supabase";

// Google 로그인
export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
      },
    },
  });

  if (error) {
    alert(`로그인 실패: ${error.message}`);
    return { error };
  }
  return { error: null };
};

// 로그아웃
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("로그아웃 실패:", error.message);
    return { error };
  }
  return { error: null };
};

// 현재 세션 확인
export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("세션 확인 실패:", error.message);
    return { session: null, error };
  }
  return { session: data.session, error: null };
};

// 사용자 정보 가져오기
export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("사용자 정보 가져오기 실패:", error.message);
    return { user: null, error };
  }
  return { user: data.user, error: null };
};
