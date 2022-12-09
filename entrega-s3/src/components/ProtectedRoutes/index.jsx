import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Logo } from "../../Styles/Logo";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Logo>Carregando...</Logo>;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};
