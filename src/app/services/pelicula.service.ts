import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula';
import { PeliculaDetalle } from '../interfaces/peliculadetalles';
import { PeliculaCreacion } from '../interfaces/peliculacreacion';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "peliculas/";

  constructor(private http:HttpClient) { }

  getList():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  add(request:Pelicula):Observable<Pelicula>{
    return this.http.post<Pelicula>(this.apiUrl, request);
  }

  editar(request:PeliculaCreacion):Observable<void>{
    return this.http.put<void>(`${this.apiUrl}${request.id}`, request);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
  getPelicula(id:number):Observable<PeliculaDetalle>{
    return this.http.get<PeliculaDetalle>(`${this.apiUrl}${id}`);
  }


}
