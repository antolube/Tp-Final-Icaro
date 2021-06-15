import { Component, OnInit } from '@angular/core';
import { InteractionsService } from 'src/app/services/interactions.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(private _comunicacion:InteractionsService, ) { }

  usuarioMostrar: any = [];
  login: boolean = false;

  ngOnInit(): void {
    this.reciboComunicacion();
    this.loginTrue();
  }

  reciboComunicacion(){

    this.usuarioMostrar = this._comunicacion.getUser();
    console.log("estoy reciendo este usuario del servicio:",this.usuarioMostrar);
  }

  loginTrue(){
    if(this.usuarioMostrar.length > 0) return this.login=true;
    else
    return this.login=false;
  }
}
