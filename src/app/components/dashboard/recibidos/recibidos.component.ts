import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from 'src/app/models/message';
import { InteractionsService } from 'src/app/services/interactions.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.scss']
})
export class RecibidosComponent implements OnInit {

  mensajes: Mensaje [] =[];

  usuarioMostrar: any = [];

  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;

  constructor(
    private _messagesService:MessagesService,
    public _comunicacion:InteractionsService) {}

  ngOnInit(): void {
    this.cargarMensajes();
    this.reciboComunicacion();
  }

  reciboComunicacion(){
    this.usuarioMostrar = this._comunicacion.getUser();
    console.log("estoy reciendo este usuario del servicio:",this.usuarioMostrar)
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
// this.muestroUsuario();
// this._comunicacion.comunicacionUsuario$.subscribe(usuario =>{
  //   console.log("estoy recibiendo este usuario del InteractionsService:",usuario); usuario
  // });

  // this.dataSource = this._messagesService.getMessages();
  // this.mensajes =this._messagesService.getMessages();
  // console.log(this.mensajes);

  // muestroUsuario(){
    //   this._interactionsService.getUsuarios$().subscribe(usuario =>{
  //     this.usuarioMostrar= usuario;
  //     console.log("estoy por mostrar este usuario:",usuario)
  //   });
  // }
