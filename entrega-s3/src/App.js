import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Mainroutes as Routes } from "./routes";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
