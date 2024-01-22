"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [login, setEmail] = useState("");
  const [senha, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      login,
      senha,
      redirect: false,
    });
    if (result?.error) {
      console.log(result.error);
      return;
    }
    router.replace("/");
  };
  return (
    <main>
      <div>
        <h1>Página de Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Email:
            <input
              type="text"
              value={login}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </main>
  );
}
