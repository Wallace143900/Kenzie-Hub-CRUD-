import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({});



export const TechProvider = ({ children }) => {
    const {techsList, setTechList} = useContext(UserContext);
    
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenEdit, setModalOpenEdit] = useState(false);
    const [editTech, setEditTech] = useState(null);

    

    const registerTech = (formData) => {
        CreateTecnologies(formData);
    }

    
    const CreateTecnologies = async (payload) => {
        try {
            const token = localStorage.getItem("@kenzieHub:token");
            const { data } = await api.post("/users/techs", payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Tecnologia adicionada com sucesso.", {autoClose:2000}) 
    
            const newTechList = [...techsList, data];
                setTechList(newTechList);
                setUser(data.user);
        } catch (error) {
            console.log(error);
        }
    };
    
    const UpdateTecnologies = async (tech) => {
        try {
            const token = localStorage.getItem("@kenzieHub:token");
            const { data } = await api.put(`/users/techs/${editTech.id}`, tech, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 

            toast.success("Tecnologia Editada com sucesso.", {autoClose:2000})
            const newEditTecnologies = techsList.map(tech => {
                if(tech.id === editTech.id) {
                    return data;
                }
                return tech;
            })
            setTechList(newEditTecnologies);
            setEditTech(null);
        } catch (error) {
            console.log(error);
        }
    };


    

    const deleteTech = async (tech_Id) => {
        try {
            const token = localStorage.getItem("@kenzieHub:token");
            await api.delete(`/users/techs/${tech_Id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const filteredTech = techsList.filter(({id}) => id !== tech_Id);
            setTechList(filteredTech);
            toast.success("Tecnologia excluída com sucesso");
        } catch (error) {
            console.log(error);
        }
    }
    return <TechContext.Provider value={{ CreateTecnologies, modalOpen, setModalOpen, UpdateTecnologies, registerTech, deleteTech, modalOpenEdit, setModalOpenEdit, editTech, setEditTech }}>{children}</TechContext.Provider>
};