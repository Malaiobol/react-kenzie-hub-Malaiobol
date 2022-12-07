import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginRequest = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      const { token, user: userResponse } = response.data;

      localStorage.setItem("@context-login:TOKEN", token);
      localStorage.setItem("@context-login:userID", response.data.user.id);

      setUser(userResponse);
      navigate("/home");
      toast.success("Sessão iniciada com sucesso.", {
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
      toast.error(
        "Email ou senha inválidos, verifique as credenciais inseridas.",
        {
          autoClose: 2500,
        }
      );
    }
  };

  return (
    <AuthContext.Provider value={{ loginRequest, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
