import { useParams } from "react-router-dom";

function Quiz() {
  const params = useParams();
  return <div>{params.id}번 퀴즈</div>;
}

export default Quiz;
