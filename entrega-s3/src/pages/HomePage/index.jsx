import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { StyledMain } from "./style";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { Logo } from "../../Styles/Logo";

export const HomePage = () => {
  const { user, setUser, loading } = useContext(AuthContext);

  const logOut = () => {
    localStorage.clear();
    setUser(null);
  };

  if (loading) {
    return <Logo>Carregando...</Logo>;
  }

  return user ? (
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
  ) : (
    <Navigate to="/" />
  );
};
