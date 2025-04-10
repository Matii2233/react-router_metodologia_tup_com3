import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICurso } from "../types/ICurso";

interface ICursoStore {
    cursoActivo: ICurso | null,
    setCursoActivo: (curso: ICurso) => void
}

export const useCursoStore = create<ICursoStore>()(
    persist(
        (set) => ({
            cursoActivo: null,
            setCursoActivo: (curso) => set({ cursoActivo: curso})
        }),
        {
            name: "curso-activo"
        }
    )
)