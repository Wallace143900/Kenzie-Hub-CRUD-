import styles from "./styles.module.scss";
import {useForm} from "react-hook-form";
import { Input } from "../Input";
import { registerFormSchema } from "./registerForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterForm = ({setUser}) => {

    const {handleSubmit, register, formState: {errors},} = useForm({
        resolver: zodResolver(registerFormSchema)
    });

    const navigate = useNavigate()

    const creatUser = async (payload) => {
        const { confirmPassword, ...rest } = payload

        try {
          const { data } = await api.post("/users", rest); 
          localStorage.setItem("@kenzieHub:token", data.accessToken);
          toast.success("Usuario criado com sucesso.", {autoClose:2000}) 

          setUser(data.user);

          navigate("/user")
          
          console.log(data) 
        } catch (error) {
            toast.error("Email já existente");
        }
    }

    const onSubmit = (formData) => {
        creatUser(formData);
    }

    
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formHeader}>
                    <h3 className="title2">Crie sua conta</h3>
                    <p className="headline">Rápido e grátis, vamos nessa</p>
                </div>
                <div className={styles.myInformation}>
                    <Input label="Nome" type="text" error={errors.name} {...register("name")} placeholder="Digite aqui seu nome" />
                    <Input label="Email" type="email" error={errors.email} {...register("email")} placeholder="Digite aqui seu email" />
                    <Input label="Senha" type="password" error={errors.password} {...register("password")} placeholder="Digite aqui sua senha" />
                    <Input label="Confirmar Senha" type="password" error={errors.confirmPassword} {...register("confirmPassword")} placeholder="Confirme sua senha" />
                    <Input label="Bio" type="text" error={errors.bio} {...register("bio")} placeholder="Fale sobre você" />
                    <Input label="Contato" type="tel" error={errors.contact} {...register("contact")} placeholder="Digite aqui seu contato" />
                    <label className="paragraph" id={styles.select}>Selecionar Módulo</label>
                    <select className="title2" name="modulos" id="modulos" {...register("course_module")}>
                        <option value="Primeiro modulo">Primeiro Módulo</option>
                        <option value="Segundo modulo">Segundo Módulo</option>
                        <option value="Terceiro modulo">Terceiro Módulo</option>
                        <option value="Quarto modulo">Quarto Módulo</option>
                        <option value="Quinto modulo">Quinto Módulo</option>
                        <option value="Sexto modulo">Sexto Módulo</option>
                    </select>
                </div>
                    <button id={styles.buttonFooter} className="paragraph" type="submit">Cadastrar</button>
            </form>
    )
}