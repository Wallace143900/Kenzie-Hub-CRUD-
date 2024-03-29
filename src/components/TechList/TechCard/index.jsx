import { useContext } from "react";
import styles from "./styles.module.scss";
import { MdEdit,MdDelete } from "react-icons/md";
import { TechContext } from "../../../providers/TechContext";
import { EditTechModal } from "../../EditTechModal";


export const TechCard = ({ tech }) => {
    const {deleteTech, editTech, setEditTech} = useContext(TechContext);
    return <li>
        <div className={styles.container}>
            <div className={styles.tecnologies}>
                <div className={styles.edition}>
                    <h3 className="title2" id={styles.paragraph2}>{tech?.title}</h3>
                    <div className={styles.editionTecnologies}>
                        <p><strong className="paragraph">{tech?.status}</strong></p>
                        <div className={styles.botao}>
                        <button title="Editar" aria-label="edit" onClick={() => setEditTech(tech)}><MdEdit size={21} /></button>
                        {editTech ? <EditTechModal />: null};
                        <button title="Deletar" aria-label="delete" onClick={() => deleteTech(tech.id)}><MdDelete size={21} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </li>
}