import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Mainroutes as Routes } from "./routes";
import GlobalStyles from "./Styles/GlobalStyles";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    course_module: "",
    bio: "",
  });

  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <Routes setUser={setUser} user={user} />
    </>
  );
}

export default App;
