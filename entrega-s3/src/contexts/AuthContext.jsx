import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techList, setTechList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@context-login:TOKEN");

      if (!token) {
        setLoading(false);
        return;
      }
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
        let techListArray = data.techs;
        setTechList(techListArray);
        navigate("/home");
      } catch (err) {
        window.localStorage.clear();
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [navigate]);

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

  const newUserRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success(`Olá ${formData.name} você foi cadastrado(a)!`, {
        autoClose: 1000,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Usuário não cadastrado, verifique suas informações.", {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        newUserRegister,
        loginRequest,
        setUser,
        user,
        setLoading,
        loading,
        techList,
        setTechList,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
