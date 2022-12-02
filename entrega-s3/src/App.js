import { RegisterForm } from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RegisterForm />
    </>
  );
}

export default App;
