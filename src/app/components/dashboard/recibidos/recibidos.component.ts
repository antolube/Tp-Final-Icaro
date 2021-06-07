import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const listMessage: Mensaje[] = [
//   // {remitente:"antonio", fecha: "27/4",mensaje:"hola papa",id: 1 },

// ];

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.scss']
})
export class RecibidosComponent implements OnInit {

  mensajes: Mensaje [] =[];

  // listMessage: Mensaje []=[];

  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;

  constructor(private _messagesService:MessagesService) { }

  ngOnInit(): void {


    this.cargarMensajes();

    // this.dataSource = this._messagesService.getMessages();
    // this.mensajes =this._messagesService.getMessages();
    // console.log(this.mensajes);
  }

  cargarMensajes(){

    this.mensajes = this._messagesService.getMessages();
    this.dataSource =  new MatTableDataSource(this.mensajes);
  }

  eliminarMensaje(index: number){
    this._messagesService.eliminarMensaje(index);
    console.log(index);
    this.cargarMensajes();
  }

}
