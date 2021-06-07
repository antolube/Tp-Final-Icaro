import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  mensajes=[
    {
      id:0,
      remitente:'remitente',
      fecha:'la fecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      id:1,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      id:2,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      id:3,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      id:4,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      id:5,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
  ]

  constructor() { }

  getMessages(){
    return this.mensajes.slice();
  }

  eliminarMensaje(index: number){
    this.mensajes.splice(index,1);
  }
}
