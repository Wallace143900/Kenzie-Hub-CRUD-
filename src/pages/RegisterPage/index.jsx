import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";
import styles from "./styles.module.scss";


export const RegisterPage = () => {

    return (
        <main>
            <div className={styles.divHeader}>
                <h1 className="title1">Kenzie Hub</h1>
                <Link className="headlineBold" id={styles.buttonHeader} to="/">Voltar</Link>
            </div>
            <RegisterForm  />
        </main>
        
    )
}