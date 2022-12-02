import { Routes, Route } from "react-router-dom";
import { RegisterForm } from "../pages/RegisterPage";

export const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/register" element={RegisterForm} />
      <Route path="/main" />
    </Routes>
  );
};
