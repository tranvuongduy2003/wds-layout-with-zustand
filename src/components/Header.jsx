import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

export default function Header() {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useAuthStore((state) => state);

  function handleNavigateLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleLogout(e) {
    e.preventDefault();
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div className="w-full h-16 p-4 bg-slate-200 shadow-md">
      {isLoggedIn === false ? (
        <div className="mx-auto flex items-center flex-col">
          <button
            onClick={(e) => handleNavigateLogin(e)}
            className="rounded-md flex items-center justify-center w-56 bg-blue-300 text-2xl text-white font-semibold"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="mx-auto flex items-center flex-col">
          <button
            onClick={(e) => handleLogout(e)}
            className="rounded-md flex items-center justify-center w-56 bg-red-300 text-2xl text-white font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
