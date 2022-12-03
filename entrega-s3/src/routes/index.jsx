import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterForm } from "../pages/RegisterPage";
import { LoginForm } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { useState } from "react";

export const Mainroutes = ({ setUser, user }) => {
  const [logged, setLogin] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          logged ? (
            <Navigate to="/home" />
          ) : (
            <LoginForm setUser={setUser} setLogin={setLogin} />
          )
        }
      />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/home"
        element={
          logged ? (
            <HomePage user={user} setLogin={setLogin} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};
