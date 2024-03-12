import { RouterMain } from "./pages/Routers/RouterMain/index.jsx";
import "./styles/index.scss";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <RouterMain />
      <ToastContainer theme="dark"/>
    </>
  )
}

export default App
