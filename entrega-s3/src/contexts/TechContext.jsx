import { createContext, useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});
export const TechProvider = ({ children }) => {
  const { techList, setTechList } = useContext(AuthContext);

  const createTech = async (data) => {
    try {
      const resp = await api.post("/users/techs", data);
      toast.success("Tecnologia criada com sucesso!", {
        autoClose: 1500,
      });
      setTechList([...techList, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTech = async (id) => {
    try {
      api.delete(`/users/techs/${id}`);
      toast.success("Tecnologia deletada com sucesso!", {
        autoClose: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TechContext.Provider value={{ createTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};
