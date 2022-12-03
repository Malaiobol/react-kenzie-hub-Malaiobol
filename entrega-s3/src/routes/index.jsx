import { Routes, Route } from "react-router-dom";
import { RegisterForm } from "../pages/RegisterPage";
import { LoginForm } from "../pages/LoginPage";

export const Mainroutes = ({ setUser, user }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm setUser={setUser} />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/home" />
    </Routes>
  );
};
