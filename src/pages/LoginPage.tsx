import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

export function LoginPage() {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuthStore((state) => state);

  function handleLogin(e) {
    // Xử lý login
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-16">Login Page</h1>
      <form className="flex flex-col gap-8 items-center w-full">
        <input
          type="text"
          placeholder="Username"
          className="p-4 rounded-md border border-solid border-neutral-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 rounded-md border border-solid border-neutral-400"
        />
        <button
          onClick={(e) => handleLogin(e)}
          className="p-4 rounded-md flex items-center justify-center h-16 w-56 bg-purple-300 text-2xl text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
