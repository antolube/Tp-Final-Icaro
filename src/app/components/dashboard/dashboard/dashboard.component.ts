import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { InteractionsService } from 'src/app/services/interactions.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuarioMostrar: any = [];

//  usaurioMostrar:string = '';

  constructor( private _comunicacion:InteractionsService,  ) { }

  ngOnInit(): void {
    this.reciboComunicacion();
    // this.cargarUsuario();
  }

  reciboComunicacion(){
    this.usuarioMostrar = this._comunicacion.getUser();
    console.log("estoy reciendo este usuario del servicio:",this.usuarioMostrar);
  }

  // cargarUsuario(){
  //   this._interactionsService.usuarioLogeado$.subscribe(usuario=>{
  //   console.log(usuario);this.usaurioMostrar = usuario;
  // });

  // reciboComunicacion(){
  //   this._comunicacion.comunicacionUsuario$.subscribe(usuario =>{
  //     console.log("estoy recibiendo este usuario:",usuario);
  //   })
  //}
}


