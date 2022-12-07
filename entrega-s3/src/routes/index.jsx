import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginForm } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

export const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
