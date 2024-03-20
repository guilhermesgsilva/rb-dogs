import { useNavigate } from "react-router-dom";

import { StyledNav, StyledTypography } from "./NavBar.styles";

function NavBar() {
  let navigate = useNavigate();

  return (
    <StyledNav>
      <StyledTypography onClick={() => navigate("/")}>RB DOGS</StyledTypography>
    </StyledNav>
  );
}

export default NavBar;
