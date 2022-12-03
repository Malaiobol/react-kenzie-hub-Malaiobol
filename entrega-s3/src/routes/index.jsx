import { Routes, Route } from "react-router-dom";
import { RegisterForm } from "../pages/RegisterPage";
import { LoginForm } from "../pages/Login";

export const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/main" />
    </Routes>
  );
};
