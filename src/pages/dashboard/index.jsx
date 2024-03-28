import { useContext } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";

export const Dashboard = () => {

    const {user} = useContext(UserContext);
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