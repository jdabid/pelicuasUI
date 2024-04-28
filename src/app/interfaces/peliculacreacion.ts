import { ActoresPeliculaCreacion } from "./actorespeliculacreacion";

export interface PeliculaCreacion {
    id: number,
    titulo: string,
    encines: boolean,
    fechaEstreno: Date,
    generosIDs: number[],
    actores: ActoresPeliculaCreacion[]
}