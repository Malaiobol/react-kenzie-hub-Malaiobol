import { useContext } from "react";
import { StyledMain } from "./style";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";

export const HomePage = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    window.localStorage.clear();
    setUser(null);
  };

  return (
    <>
      <StyledMain>
        <Header page={"/"} name={"Sair"} logOut={logOut} />
        <div>
          <h2>Olá, {user.name}</h2>
          <small>{user.course_module}</small>
        </div>
        <section>
          <h3>Que pena, estamos em desenvolvimento.</h3>
          <p>Nossa aplicação ainda está em desenvolvimento...</p>
        </section>
      </StyledMain>
    </>
  );
};
