import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./styles.module.scss";

export const HomePage = ({setUser, registers}) => {
    return (
        <main>
            <h1 className="title1" id={styles.kenzieHub}>Kenzie Hub</h1>
            <div className={styles.divForm}>
                <h3 className="title2">Login</h3>
                <div className={styles.myInformation}>
                    <LoginForm setUser={setUser} />
                    <p className="headline" id={styles.paragraphQuestion}>Ainda não possui uma conta?</p>
                </div>
                <div className={styles.divbutton}>
                    <button className="headlineBold" id={styles.create} onClick={registers}>Cadastre-se</button>
                </div>
            </div>
        </main>
    )
}