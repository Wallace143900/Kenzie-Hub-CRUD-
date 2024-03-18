import { useContext } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./styles.module.scss"
import { DashboardContext } from "../../providers/dashboardContext";

export const Dashboard = () => {

    const {user} = useContext(DashboardContext);
    return (

        <DefaultTemplate>
            <main>
                <div className={styles.container}>
                    <div className={styles.iAm}>
                        <h2 className="title1">Olá, {user?.name}</h2>
                        <p>{user?.course_module} (Introdução ao Frontend)</p>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.inform}>
                            <h2 className="title1">Que pena! Estamos em desenvolvimento :( </h2>
                            <h3 className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades...</h3>
                        </div>
                    </div>
                </div>
            </main> 
        </DefaultTemplate>
    )
}