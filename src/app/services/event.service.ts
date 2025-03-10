import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Event} from "../models/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient) { }
  postTarjeta(evento: Event){
    return this.http.post<Event>('http://localhost:8080/solicitud/new', evento);
  }

}
