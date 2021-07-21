import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Mensaje } from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class InteractionsService {

  user: [] =[];

  mensajes: Mensaje [] = [];

  private _comunicacion= new Subject <[]>();
  comunicacionUsuario$= this._comunicacion.asObservable();


  saveUser(user: any){
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log("estoy recibiendo este usuario del login:",user);
  }

  getUser(){
    return localStorage.getItem('currentUser');
  }

  private _informationNew= new Subject<[]>();
  informacion$= this._informationNew.asObservable();

  nvoMsj(mensajes :Mensaje){
    this._informationNew.next();
    console.log("estoy recibiendo el mensaje")
  }

  envioMsj(){
    return this.mensajes;
  }
  constructor() {
  }


}
