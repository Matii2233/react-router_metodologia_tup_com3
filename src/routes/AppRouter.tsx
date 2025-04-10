import { Route, Routes } from "react-router-dom"
import { CursosScreen } from "../components/screens/CursosScreen/CursosScreen"
import { EstudianteScreen } from "../components/screens/EstudiantesScreen/EstudianteScreen"

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/cursos" element={<CursosScreen/>}/>
      <Route path="/" element={<CursosScreen/>}/>
      <Route path="/estudiantes" element={<EstudianteScreen/>}/>
    </Routes>
    </>
  )
}
