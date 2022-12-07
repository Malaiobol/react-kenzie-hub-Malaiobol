import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@context-login:userID");

      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const loginRequest = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      const { token, user: userResponse } = response.data;

      localStorage.setItem("@context-login:TOKEN", token);
      localStorage.setItem("@context-login:userID", response.data.user.id);

      setUser(userResponse);
      navigate("/home");
      toast.success("Sessão iniciada com sucesso.", { autoClose: 2000 });
    } catch (err) {
      console.log(err);
      toast.error(
        "Email ou senha inválidos, verifique as credenciais inseridas.",
        { autoClose: 2500 }
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{ loginRequest, setUser, user, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
