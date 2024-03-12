import { RegisterForm } from "../../components/forms/RegisterForm";
import styles from "./styles.module.scss";

export const RegisterPage = ({setUser, logout}) => {
    return (
        <main>
            <div className={styles.divHeader}>
                <h1 className="title1">Kenzie Hub</h1>
                <button className="" id={styles.buttonHeader} onClick={logout}>Voltar</button>
            </div>
            <RegisterForm setUser={setUser} />
        </main>
    )
}