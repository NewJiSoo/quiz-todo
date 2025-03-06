import { useState } from "react";
import { supabase } from "../util/supabase";

function Login() {
  const [user, setUser] = useState<any>(null);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    if (error) {
      alert(error.message);
    } else {
      setUser(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.email}</h3>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Log in with Google</button>
        </div>
      )}
    </div>
  );
}

export default Login;
