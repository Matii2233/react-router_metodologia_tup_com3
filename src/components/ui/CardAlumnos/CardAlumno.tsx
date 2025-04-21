import { FC } from 'react'
import { IEstudiante } from '../../../types/IEstudiante'
import styles from './CradAlumno.module.css'

type IPropsCradAlumno = {
    estudiante: IEstudiante
}

export const CardAlumno: FC<IPropsCradAlumno> = ({ estudiante }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardInfo}>
            <h3>Nombre: {estudiante.nombre}</h3>
            <p>Edad: {estudiante.edad}</p>
            <p>Nro legajo: {estudiante.id}</p>
        </div>
      </div>
    </>
  )
}
