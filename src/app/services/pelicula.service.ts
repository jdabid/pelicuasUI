import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula';

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

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
