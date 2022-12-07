import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});
export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("@context-login:TOKEN");
  const createTech = async ({ title, status }) => {
    try {
      const resp = await api.post("/users/techs", {
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: {
          title: title,
          status: status,
        },
      });
      toast.success("Tecnologia criada com sucesso!", {
        autoClose: 1500,
      });
      setLoading(true);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider value={createTech}>{children}</TechContext.Provider>
  );
};
