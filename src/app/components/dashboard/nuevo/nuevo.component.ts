import { Component, OnInit } from '@angular/core';
import { SendService } from 'src/app/services/send.service';
import {MatTableDataSource } from '@angular/material/table';
import { Mensaje } from 'src/app/models/message';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  mensajesEnviados: Mensaje [] = [];

  // listMessage: Mensaje []=[];

  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;

  constructor(private _sendService:SendService) { }

  ngOnInit(): void {


    this.cargarMensajesEnviados();

    // this.dataSource = this._messagesService.getMessages();
    // this.mensajes =this._messagesService.getMessages();
    // console.log(this.mensajes);
  }

  cargarMensajesEnviados(){

    this.mensajesEnviados = this._sendService.getMensajesEnviados();
    this.dataSource = new MatTableDataSource(this.mensajesEnviados);
  }

  eliminarMensaje(index: number){
    this._sendService.eliminarMensaje(index);
    console.log(index);
    this.cargarMensajesEnviados();
  }

}
