import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizList from "./pages/QuizList";
import Notfound from "./pages/Notfound";
import { css } from "@emotion/react";
import Login from "./pages/Login";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect, useState } from "react";
import { getSession } from "./api/auth/auth";
import { supabase } from "./util/supabase";

function App() {
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const userId = useAuthStore((state) => state.userId);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { session, error } = await getSession();
      if (error) {
        console.log(`세션 확인 에러. ${error}`);
      }
      if (session) {
        const { user } = session;
        login(user.email!, user.id);
      }
      setIsLoading(false);
    };
    checkSession();

    // 로그인 상태 변화 감지
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          const { user } = session;
          login(user.email!, user.id);
        } else if (event === "SIGNED_OUT") {
          logout();
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [login, logout]);

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <main
      css={css`
        display: flex;
      `}
    >
      {location.pathname !== "/login" && <Sidebar />}
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* userId가 없으면 로그인 페이지로 이동 */}
        {userId ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/quiz-list" element={<QuizList />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}

        {/* 404 Not Found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </main>
  );
}

export default App;
