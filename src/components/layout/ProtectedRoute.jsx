import Header from "../Header";
import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuthStore((state) => state);

  return isLoggedIn === true ? (
    <div>
      {/* Navigation Bar */}
      <Header />

      {/* Content */}
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
