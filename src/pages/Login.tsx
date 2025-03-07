import { signInWithGoogle } from "../api/auth/auth";

function Login() {
  const handleLogin = async () => {
    const { error } = await signInWithGoogle();
    if (error) {
      alert(`로그인 실패: ${error.message}`);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>구글 로그인</button>
    </div>
  );
}

export default Login;
