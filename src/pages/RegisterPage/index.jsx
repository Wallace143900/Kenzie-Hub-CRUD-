import { RegisterForm } from "../../components/forms/RegisterForm";
import { DashboardContext } from "../../providers/dashboardContext";
import styles from "./styles.module.scss";

import { useContext } from "react";


export const RegisterPage = () => {

    const { userLogout } = useContext(DashboardContext);

    return (
        <main>
            <div className={styles.divHeader}>
                <h1 className="title1">Kenzie Hub</h1>
                <button className="" id={styles.buttonHeader} onClick={userLogout}>Voltar</button>
            </div>
            <RegisterForm  />
        </main>
        
    )
}