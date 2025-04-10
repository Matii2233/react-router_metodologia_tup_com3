import { FC } from "react"
import styles from "./CardCursos.module.css"
import { useNavigate } from "react-router-dom"
import { useCursoStore } from "../../../useCursoStore/useCursoStore"
import { ICurso } from "../../../types/ICurso"

type IPropsCardCursos = {
    nombre: String,
    cantidadAlumnos: Number,
    cursoActivo: ICurso
}

export const CardCursos: FC<IPropsCardCursos> = ({ nombre, cantidadAlumnos, cursoActivo }) => {

  const navigate = useNavigate()

  const setCursoActivo = useCursoStore((state) => state.setCursoActivo)

  const handleClick = () => {
    setCursoActivo(cursoActivo);
    navigate("/estudiantes");
  };

  return (
    <>
    <div className={styles.cardContainer}>
        <h3>{nombre}</h3>
        <p>Cantidad Alumnos: {cantidadAlumnos.toString()}</p>
        <button onClick={handleClick}>ENTRAR</button>
    </div>
    </>
  )
}

