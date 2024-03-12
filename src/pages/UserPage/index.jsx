import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./styles.module.scss"

export const UserPage = ({logout, user}) => {
    return (

        <DefaultTemplate logout={logout} user={user}>
        <main>
            <div className={styles.container}>
                <div className={styles.iAm}>
                <h2 className="title1">Olá, {user?.name}</h2>
                <p>Primeiro módulo (Introdução ao Frontend)</p>
                </div>
                <div className={styles.main}>
                    <h2 className="title1">Que pena! Estamos em devolvimento :( </h2>
                    <h4 className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</h4>
                </div>
            </div>
        </main> 
        </DefaultTemplate>
    )
}