import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from 'src/app/models/message';
import { InteractionsService } from 'src/app/services/interactions.service';
import { SendService } from 'src/app/services/send.service';



@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.scss']
})
export class EnviadosComponent implements OnInit {

  mensajesEnviados: Mensaje [] = [];


  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;

  constructor(private _sendService:SendService , private _interactionsService:InteractionsService) { }

  ngOnInit(): void {


    this.cargarMensajesEnviados();


  }

  cargarMensajesEnviados(){

    this.mensajesEnviados = this._sendService.getMensajesEnviados();
    this.dataSource = new MatTableDataSource(this.mensajesEnviados);
    // this.recargar();
  }

  eliminarMensaje(index: number){
    this._sendService.eliminarMensaje(index);
    this.cargarMensajesEnviados();
  }

  // recargar(){
  //   this._interactionsService.envioMsj();
  // }
}
