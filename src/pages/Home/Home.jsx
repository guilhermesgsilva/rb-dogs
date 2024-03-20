import { useNavigate } from "react-router-dom";

import { StyledMain, StyledButton } from "./Home.styles";

function Home() {
  let navigate = useNavigate();

  return (
    <StyledMain>
      <StyledButton variant="outlined" onClick={() => navigate("/dogs")}>
        Get Dogs!
      </StyledButton>
    </StyledMain>
  );
}

export default Home;
