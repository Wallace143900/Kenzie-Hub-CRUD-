import styles from "./styles.module.scss";
import {useForm} from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../services/api";

export const LoginForm = ({setUser}) => {

    const {handleSubmit, register, formState: {errors},} = useForm({
        resolver: zodResolver(loginFormSchema)
    });

    const navigate = useNavigate();

    const login = async (payload) => {
        try {
            const { data } = await api.post("/profile", payload);
    
            localStorage.setItem("@kenzieHub:token", data.accessToken);
              toast.success("Login realizado com sucesso.", {autoClose:2000}) 
            
              setUser(data.user);

              navigate("/user")
        } catch (error) {
            toast.error("Email ou senha inválida");
        }
    };
    
    const onSubmit = (formData) => {

        login(formData);
    };
    
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formHeader}>
                    <h3 className="title2">Crie sua conta</h3>
                    <p className="headline">Rápido e grátis, vamos nessa</p>
                </div>
                <div className={styles.myInformation}>
                    <Input label="Email" type="email" error={errors.email} {...register("email")} placeholder="Digite aqui seu email" />
                    <Input label="Senha" type="password" error={errors.password} {...register("password")} placeholder="Digite aqui sua senha" />
                </div>
                <button className="headlineBold" id={styles.login}>Entrar</button>
            </form>
    );
};