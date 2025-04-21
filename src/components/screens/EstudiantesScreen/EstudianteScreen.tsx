import { useNavigate } from "react-router-dom"
import { useCursoStore } from "../../../useCursoStore/useCursoStore"
import styles from "./EstudiantesScreen.module.css"
import { CardAlumno } from "../../ui/CardAlumnos/CardAlumno"

export const EstudianteScreen = () => {

    const cursoActivo = useCursoStore((state) => state.cursoActivo)
    const estudiantes = cursoActivo?.estudiantes
    const navigate = useNavigate()

  return (
    <>
    <div className={styles.screenContainer}>
        <div className={styles.headerScreen}>
            <span className="material-symbols-outlined" onClick={() => navigate('/')}>arrow_back</span>
            <h2>VISTA ESTUDIANTES</h2>
        </div>
        <div className={styles.listaContainer}>
            <div className={styles.listaEstudiantes}>
                {estudiantes && estudiantes.length > 0 ? estudiantes.map((estudiante)=>{
                    return (
                        <CardAlumno estudiante={estudiante}/>
                    )
                })
                :
                <p>No Hay Estudiantes Cargados o surgio algun error inesperado</p>}
            </div>
        </div>
    </div>
    </>
  )
}
