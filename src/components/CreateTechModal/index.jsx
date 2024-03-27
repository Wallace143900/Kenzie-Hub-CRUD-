import { useForm } from "react-hook-form";
import { InputModalCreate } from "../CreateTechModal/InputModalCreate";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { registerFormSchema } from "./registerForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";

export const CreateTechModal = () => {

    const {setModalOpen, registerTech} = useContext(TechContext);

    const {handleSubmit, register, formState: {errors},} = useForm({
        resolver: zodResolver(registerFormSchema)
    });

    const onSubmit = (formData) => {
        registerTech(formData);
    }

    return (
        <div role="dialog" className={styles.dialog}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <header>
                    <h2 className="title2">Cadastrar Tecnologias</h2>
                    <button aria-label="close" title="Fechar" id={styles.buttonHeader} onClick={() => setModalOpen(false)}> <MdClose size={21} /> </button>
                </header>
                <div className={styles.addTecnologies}>
                    <InputModalCreate label="Nome" error={errors.title} {...register("title")} placeholder="Digite sua tecnologia"/>
                    <label className="headline">Selecionar Status</label>
                    <select name="status" {...register("status")} className="paragraph"> 
                        <option>Inicinte</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </select>
                </div>
                <div className={styles.button}>
                    <button type="submit" className="paragraph">Cadastrar Tecnologia</button>
                </div>
            </form>
        </div>
    );
};