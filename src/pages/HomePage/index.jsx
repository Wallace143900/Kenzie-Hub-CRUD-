import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./styles.module.scss";

export const HomePage = ({setUser, registers}) => {
    return (
        <main>
            <h1 className="title1" id={styles.kenzieHub}>Kenzie Hub</h1>
            <div className={styles.divForm}>
                <div className={styles.Formulario}>
                    <h3 className="title2">Login</h3>
                        <div className={styles.myInformation}>
                            <LoginForm setUser={setUser} />
                            
                            <p className="headline">Ainda não possui uma conta?</p>
                            <button className="headlineBold" id={styles.create} onClick={registers}>Cadastre-se</button>
                        </div>
                </div>
            </div>
        </main>
    )
}