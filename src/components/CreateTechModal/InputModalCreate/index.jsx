import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const InputModalCreate = forwardRef(({label, type, error, ...rest}, ref) => {
    return (
    <div className={styles.inputModal}>
        <label>{label}</label>
        <input ref={ref} type="text" {...rest} className="headlineBold"/>
        {error ? <p className="headline" id={styles.paragraphy2}>{error.message}</p> : null}
    </div>
    )
})