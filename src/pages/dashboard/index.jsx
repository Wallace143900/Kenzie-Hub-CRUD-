import { useContext } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./styles.module.scss";
import { DashboardContext } from "../../providers/dashboardContext";
import { TechList } from "../../components/TechList";
import { TechContext } from "../../providers/TechContext";

export const Dashboard = () => {

    const {user} = useContext(DashboardContext);
    return (

        <DefaultTemplate>
            <main>
                <div className={styles.container}>
                    <div className={styles.iAm}>
                        <h2 className="title1">Olá, {user?.name}</h2>
                        <p className="paragraph">{user?.course_module} (Introdução ao Frontend)</p>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.inform}>
                           <TechList />  
                        </div>
                    </div>
                </div>
            </main> 
        </DefaultTemplate>
    )
}