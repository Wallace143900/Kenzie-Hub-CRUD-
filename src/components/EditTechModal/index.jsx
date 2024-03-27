import { useForm } from "react-hook-form";
import { InputModalEdit } from "../EditTechModal/InputModalEdit";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";
import { EditFormSchema } from "./EditForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const EditTechModal = () => {

    const {UpdateTecnologies, editTech, setEditTech } = useContext(TechContext);

    const {handleSubmit, register} = useForm({
        resolver: zodResolver(EditFormSchema),
        values: {
            title: editTech.title,
            status: editTech.status, 
        },
    });

    const onSubmit = (formData) => {
        UpdateTecnologies(formData);
    }

    return (

        <div role="dialog" className={styles.dialog}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <header>
                    <h2 className="title2">Editar Tecnologia</h2>
                    <button aria-label="close" title="Fechar" id={styles.buttonHeaders} onClick={() => setEditTech(null)}> <MdClose size={22} /> </button>
                </header>
                <div className={styles.addTecnologies}>
                    <InputModalEdit label="Name" {...register("title")} placeholder="Digite sua tecnologia" values={editTech.title}/>
                    <label className="headline">Status</label>
                    <select name="Selecionar Status" {...register("status")} className="paragraph"> 
                        <option>Inicinte</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                </select>
                </div>
                <div id={styles.button}>
                    <button type="submit"id={styles.buttonFooter} className="paragraph">Salvar Alterações</button>
                </div>
            </form>
        </div>
    )
}