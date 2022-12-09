import { Mainroutes as Routes } from "./routes";
import GlobalStyles from "./Styles/GlobalStyles";
import { AuthProvider } from "./contexts/AuthContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </AuthProvider>
    </>
  );
}

export default App;
