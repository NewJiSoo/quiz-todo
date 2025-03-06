import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizList from "./pages/QuizList";
import Notfound from "./pages/Notfound";
import { css } from "@emotion/react";
import Login from "./pages/Login";

function App() {
  return (
    <main
      css={css`
        display: flex;
      `}
    >
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="*" element={<Notfound />} />
        {/* 전체 페이지를 확인하면서 경로가 없다면 *(전체)에 해당하는 not found페이지 렌더링  */}
      </Routes>
    </main>
  );
}

export default App;
