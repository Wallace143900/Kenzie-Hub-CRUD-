import { useContext } from "react";
import { RouterMain } from "./pages/Routers/RouterMain/index.jsx";
import "./styles/index.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-loading-io";
import { UserContext } from "./providers/UserContext.jsx";


function App() {

  const {loading} = useContext(UserContext);

  const spinnerCfg = {left: "45%", transform: "translateY(135%)"}
  return (
    <>
      <ToastContainer theme="dark"/>
      {loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
      </>
  )
}

export default App
