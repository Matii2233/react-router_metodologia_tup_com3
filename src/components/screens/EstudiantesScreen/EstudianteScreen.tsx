import { useCursoStore } from "../../../useCursoStore/useCursoStore"
import styles from "./EstudiantesScreen.module.css"

export const EstudianteScreen = () => {

    const cursoActivo = useCursoStore((state) => state.cursoActivo)
    const estudiantes = cursoActivo?.estudiantes
    console.log(estudiantes)

  return (
    <>
    <div className={styles.screenContainer}>
        <div className={styles.headerScreen}>
            <h2>VISTA ESTUDIANTES</h2>
        </div>
        <div className={styles.listaEstudiantes}>
            {estudiantes && estudiantes.length > 0 ? estudiantes.map((estudiante)=>{
                return (
                    <h3>{estudiante.nombre}</h3>
                )
            })
            :
            <p>No Hay Estudiantes Cargados o surgio algun error inesperado</p>}
        </div>
    </div>
    </>
  )
}
