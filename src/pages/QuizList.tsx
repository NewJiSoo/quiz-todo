import { useSearchParams } from "react-router-dom";

function QuizList() {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value")); // hello

  return <div>QuizList</div>;
}

export default QuizList;
