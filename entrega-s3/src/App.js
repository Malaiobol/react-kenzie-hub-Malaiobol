import { Mainroutes as Routes } from "./routes";
import GlobalStyles from "./Styles/GlobalStyles";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <GlobalStyles />
      <Routes setUser={setUser} user={user} />
    </>
  );
}

export default App;
