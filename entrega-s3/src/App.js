import { Mainroutes as Routes } from "./routes";
import GlobalStyles from "./Styles/GlobalStyles";
import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes setUser={setUser} user={user} />
      </AuthProvider>
    </>
  );
}

export default App;
