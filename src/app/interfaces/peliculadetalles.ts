import { ActorDetalle } from "./actordetalle";
import { Genero } from "./genero";
import { Pelicula } from "./pelicula";

export interface PeliculaDetalle extends Pelicula{
    generos: Genero[],
    actores: ActorDetalle[]
}