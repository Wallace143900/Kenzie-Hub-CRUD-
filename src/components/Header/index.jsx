import { useContext } from "react";
import styles from "./styles.module.scss";
import { DashboardContext } from "../../providers/dashboardContext";

export const Header = () => {

    const { userLogout } = useContext(DashboardContext);
    return (
        <header>
            <div className={styles.divHeader}>
            <h1 className="title1">Kenzie Hub</h1>
            <button onClick={userLogout} className="headline" id={styles.button}>Sair</button>
            </div>
        </header>
    )
}