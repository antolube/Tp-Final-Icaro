import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  mensajesEnviados=[
    {
      id:0,
      remitente:'remitente',
      fecha:'la fecha',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      id:1,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      id:2,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      id:3,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      id:4,
      remitente:'remitente',
      fecha:'lafecha',
      mensaje:'este mensaje es de prueba par la tabla de Mensajes Enviados, HOlA'
    },
    {
      id:5,
      remitente:'remitente',
      fecha:'lafecha',
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
}
