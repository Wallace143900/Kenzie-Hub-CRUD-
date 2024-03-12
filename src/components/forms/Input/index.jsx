import { forwardRef } from "react";
import styles from "./styles.module.scss"

export const Input = forwardRef(({ label, type, error, ...rest }, ref) => {
    return (
        <div className={styles.myInformation}>
            <label className="paragraph">{label}</label>
            <input type={type} {...rest} ref={ref} className="title2" />
            {error ? <p className={styles.paragraphy2}>{error.message}</p> : null}
        </div>
    )
});