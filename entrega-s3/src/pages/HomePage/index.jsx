import { StyledMain } from "./style";
import { Header } from "../../components/Header";

export const HomePage = ({ user, setLogin }) => {
  const logOut = () => {
    localStorage.clear();
    setTimeout(() => {
      setLogin(false);
    }, 1000);
  };

  return (
    <>
      <StyledMain>
        <Header name={"Sair"} logOut={logOut} />
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
