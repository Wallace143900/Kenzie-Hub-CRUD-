import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api"

export const DashboardContext = createContext({});

export const DashboardProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [register, setRegister] = useState(null);
    const navigate = useNavigate();

    const userRegister = async (payload) => {
        const { confirmPassword, ...rest } = payload

        try {
          const { data } = await api.post("/users", rest); 
          localStorage.setItem("@kenzieHub:token", data.accessToken);
          toast.success("Usuario criado com sucesso.", {autoClose:2000}) 

          setUser(data.user);

          navigate("/")
          
          console.log(data) 
        } catch (error) {
            toast.error("Email já existente");
        }
    }


    const userLogin = async (payload) => {
        try {
            const { data } = await api.post("/sessions", payload);
    
            localStorage.setItem("@kenzieHub:token", data.accessToken);
              toast.success("Login realizado com sucesso.", {autoClose:2000}) 
            
              setUser(data.user);

              navigate("/user")
        } catch (error) {
            toast.error("Email ou senha inválida");
        }
    };

    const userLogout = () => {
        setUser(null);
        navigate("/");
    };

    const registers = () => {
        setRegister(null);
        navigate("/register");
    }


    return (
        <DashboardContext.Provider value={{user, register, userRegister, userLogin, userLogout, registers}}>{children}</DashboardContext.Provider>
    )
}