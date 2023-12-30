import Header from "../Header";
import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

export default function AuthProtectedRoute() {
  const { isLoggedIn } = useAuthStore((state) => state);

  return isLoggedIn === false ? (
    <div>
      {/* Navigation Bar */}
      <Header />

      {/* Content */}
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
}
