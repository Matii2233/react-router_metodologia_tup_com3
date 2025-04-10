import { useEffect, useState } from "react"
import { CardCursos } from "../../ui/CardCursos/CardCursos"
import styles from "./CursosScreen.module.css"

export const CursosScreen = () => {

    const [cursos, setCursos] = useState<any>(null)

    useEffect(() => {
        fetch("/db.json")
        .then((response) => response.json())
        .then((json) => setCursos(json.cursos))
        .catch((error) => console.error('Error al carcar los datos', error))
    }, [])

  return (
    <>
    <div className={styles.screenContainer}>
        <div className={styles.headerScreen}>
            <h2>VISTA CURSOS</h2>
        </div>

        <div className={styles.bodyScreen}>
            {cursos?.map((curso: any) => {
                console.log(curso.nombre)
                console.log(curso.estudiantes.length)
                return (<CardCursos key={curso.id} nombre={curso.nombre} cantidadAlumnos={curso.estudiantes.length} cursoActivo={curso}/>)
            })}
        </div>
    </div>
    </>
  )
}
