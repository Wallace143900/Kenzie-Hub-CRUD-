import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [register, setRegister] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [techsList, setTechList] = useState([]);

    const navigate = useNavigate();
    const location = window.location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("@kenzieHub:token");

        const getUser = async () => {
            try {
                setLoading(true);
                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(data);
                setTechList(data.techs);

                navigate(location);
            } catch (error) {
                
            }finally {
                setLoading(false);
            }
    } 

    if (token) {
        getUser();       
    }
    }, []);

    const userRegister = async (payload) => {
        const { confirmPassword, ...rest } = payload

        try {
          const { data } = await api.post("/users", rest); 
          localStorage.setItem("@kenzieHub:token", data.token);

          toast.success("Usuario criado com sucesso.", {autoClose:2000}) 

          setUser(data.user);

          navigate("/")
 
        } catch (error) {
            toast.error("Email já existente");
        }
    }


    const userLogin = async (payload) => {
        try {
            const { data } = await api.post("/sessions", payload);

            localStorage.setItem("@kenzieHub:token", data.token);
              toast.success("Login realizado com sucesso.", {autoClose:2000}) 
            
              setUser(data.user);
              setTechList(data.user.techs);

              navigate("/user")
        } catch (error) {
            toast.error("Email ou senha inválida");
        }
    };

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@kenzieHub:token");
        navigate("/");
    };

    const registers = () => {
        setRegister(null);
        navigate("/register");
    }


    return (
        <UserContext.Provider value={{loading, user, register, userRegister, userLogin, userLogout, registers, techsList, setTechList}}>{children}</UserContext.Provider>
    )
}