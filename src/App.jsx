import { useContext } from "react";
import { RouterMain } from "./pages/Routers/RouterMain/index.jsx";
import "./styles/index.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from "./pages/dashboard/index.jsx";
import { Spinner } from "react-loading-io"
import { DashboardContext } from "./providers/dashboardContext.jsx";


function App() {

  const {loading} = useContext(DashboardContext);

  const spinnerCfg = {left: "45%", transform: "translateY(135%)"}
  return (
    <>
      <ToastContainer theme="dark"/>
      {loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
      </>
  )
}

export default App
