import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>
      <Link to="/">Voltar</Link>
    </StyledHeader>
  );
};
