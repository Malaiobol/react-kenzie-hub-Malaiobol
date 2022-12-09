import { useContext } from "react";
import { StyledMain } from "./style";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { Tech } from "./Technologies";
import { useState } from "react";
import { Modal } from "../../components/Modal";

export const HomePage = () => {
  const { user, setUser, techList } = useContext(AuthContext);
  const [needModal, setNeed] = useState(false);

  const logOut = () => {
    window.localStorage.clear();
    setUser(null);
  };

  const setModal = (state) => {
    setNeed(state);
  };

  return (
    <>
      {needModal ? <Modal setNeed={setNeed} /> : ""}
      <StyledMain>
        <Header page={"/"} name={"Sair"} logOut={logOut} />
        <div>
          <h2>Olá, {user.name}</h2>
          <small>{user.course_module}</small>
        </div>
        <section>
          <div>
            <h3>Tecnologias</h3>
            <button
              onClick={() => {
                setModal(true);
              }}>
              +
            </button>
          </div>
          <ul>
            {techList.map((tech) => (
              <Tech
                name={tech.title}
                status={tech.status}
                key={tech.id}
                id={tech.id}
              />
            ))}
          </ul>
        </section>
      </StyledMain>
    </>
  );
};
