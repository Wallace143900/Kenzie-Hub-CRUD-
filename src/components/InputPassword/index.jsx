import { forwardRef } from "react";
import styles from "./styles.module.scss";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import { useState } from "react";

export const InputPassword = forwardRef(({ label, type, error, ...rest }, ref) => {

    const [isHiden, setIsHidden] = useState(true);

    const Type = isHiden ? "password" : "text"

    return (
        <div className={styles.myInformation}>
            <label className="paragraph">{label}</label>
            <div className={styles.inputGrid}>
                <input {...rest} ref={ref} className="title2" id={styles.inpt} type={Type} />
                {error ? <p className="headline" id={styles.paragraphy2}>{error.message}</p> : null}
                <button type="button" onClick={() => setIsHidden(!isHiden)}>
                    {isHiden ? <FaRegEyeSlash size={21} /> : <FaRegEye size={21} />}
                </button>
            </div>
        </div>
    )
});