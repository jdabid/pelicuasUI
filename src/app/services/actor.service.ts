import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Actor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "actores/";

  constructor(private http:HttpClient) { }

  getList():Observable<Actor[]>{
    return this.http.get<Actor[]>(this.apiUrl);
  }

  add(request:Actor):Observable<Actor>{
    return this.http.post<Actor>(this.apiUrl, request);
  }

  delete(IdActor:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${IdActor}`);
  }
}
