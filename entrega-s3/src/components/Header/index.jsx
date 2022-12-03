import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
export const Header = ({ page, name, logOut }) => {
  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>
      <Link to={page} onClick={logOut}>
        {name}
      </Link>
    </StyledHeader>
  );
};
