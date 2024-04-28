import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Genero } from '../interfaces/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "generos/";

  constructor(private http:HttpClient) { }

  getList():Observable<Genero[]>{
    return this.http.get<Genero[]>(this.apiUrl);
  }

  add(request:Genero):Observable<Genero>{
    return this.http.post<Genero>(this.apiUrl, request);
  }

  delete(Id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${Id}`);
  }
}
