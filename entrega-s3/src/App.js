import { Mainroutes as Routes } from "./routes";
import GlobalStyles from "./Styles/GlobalStyles";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
