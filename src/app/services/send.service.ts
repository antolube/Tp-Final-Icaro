import { Injectable } from '@angular/core';
import { Mensaje } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  mensajesEnviados=[
    {
      remitente:'remitente',
      fecha:'27/05/2021',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      remitente:'remitente',
      fecha:'27/05/2021',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      remitente:'remitente',
      fecha:'27/05/2021',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      remitente:'remitente',
      fecha:'27/05/2021',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      remitente:'remitente',
      fecha:'27/05/2021',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      remitente:'remitente',
      fecha:'27/05/2021',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
  ]

  constructor() { }

  getMensajesEnviados(){
    return this.mensajesEnviados.slice();
  }

  eliminarMensaje(index: number){
    this.mensajesEnviados.splice(index,1);
  }

  agregarMensaje(mensaje:Mensaje){
    this.mensajesEnviados.unshift(mensaje);
  }
}
