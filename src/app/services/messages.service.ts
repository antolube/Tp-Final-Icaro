import { Injectable } from '@angular/core';
import { Mensaje } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  mensajes=[
    {

      remitente:'remitente',
      fecha:'la fecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de mensajes recibidos'
    },
    {
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

  agregarMensaje(mensaje:Mensaje){
    this.mensajes.unshift(mensaje);

  }


}
