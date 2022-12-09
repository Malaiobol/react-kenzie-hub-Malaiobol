import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginForm } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
