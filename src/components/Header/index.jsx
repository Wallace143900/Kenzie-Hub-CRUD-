import styles from "./styles.module.scss";

export const Header = ({logout}) => {
    return (
        <header>
            <div className={styles.divHeader}>
            <h1>Kenzie Hub</h1>
            <button onClick={logout} className={styles.button}>Voltar</button>
            </div>
        </header>
    )
}