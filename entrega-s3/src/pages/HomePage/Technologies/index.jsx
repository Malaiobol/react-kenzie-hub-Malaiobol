import { StyledTech } from "./style";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { AuthContext } from "../../../contexts/AuthContext";

export const Tech = ({ name, status, id }) => {
  const { deleteTech } = useContext(TechContext);
  const { techList, setTechList } = useContext(AuthContext);

  function removeTech(oldTechId) {
    try {
      const newTechList = techList.filter((tech) => tech.id !== oldTechId);
      setTechList(newTechList);
      deleteTech(oldTechId);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <StyledTech>
      <p>{name}</p>
      <div>
        <small>{status}</small>
        <div>
          <BsTrash
            onClick={() => {
              removeTech(id);
            }}
          />
        </div>
      </div>
    </StyledTech>
  );
};
