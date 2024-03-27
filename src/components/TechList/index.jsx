import { useContext } from "react";
import { DashboardContext } from "../../providers/dashboardContext";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../CreateTechModal";
import { MdAdd } from "react-icons/md";
import styles from "./styles.module.scss";




export const TechList = () => {

    const {techsList} = useContext(DashboardContext); 
    const {modalOpen, setModalOpen} = useContext(TechContext);
    return (
        <div className={styles.containerTecnologies}>
            <div className={styles.headerContainer}>
                <h2 className="title1">Tecnologias</h2>
                <button onClick={() => setModalOpen(true)}> <MdAdd size={25} /></button>
                {modalOpen ? <CreateTechModal />: null}
            </div>
            <ul>
                {techsList.map((tech) => <TechCard key={tech.id} tech={tech} />)};
            </ul>
        </div>
    )

}