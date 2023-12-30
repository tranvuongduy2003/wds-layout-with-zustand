import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import AuthProtectedRoute from "./components/layout/AuthProtectedRoute";

function App() {
  // isLogin

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<AuthProtectedRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
