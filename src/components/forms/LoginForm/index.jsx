import styles from "./styles.module.scss";
import {useForm} from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { DashboardContext } from "../../../providers/dashboardContext";
import { InputPassword } from "../../InputPassword";

export const LoginForm = () => {

    const { userLogin } = useContext(DashboardContext);

    const onSubmit = (formData) => {
        userLogin(formData);
    };

    const {handleSubmit, register, formState: {errors},} = useForm({
        resolver: zodResolver(loginFormSchema)
    });
    
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formHeader}>
            </div>
            <div className={styles.myInformation}>
                <Input label="Email" type="email" error={errors.email} {...register("email")} placeholder="Digite aqui seu email" />
                <InputPassword label="Senha" error={errors.password} {...register("password")} placeholder="Digite aqui sua senha" />
                <button className="headlineBold" id={styles.login}>Entrar</button>
            </div>
        </form>
    );
};