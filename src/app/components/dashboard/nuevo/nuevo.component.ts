import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  usuarios: Usuario [] =[];
  // const mensajes= [];
  constructor(private _userService: UsuariosService) { }

  ngOnInit(): void {

    this.getTraerUsuarios();

  }
  getTraerUsuarios(){
    this.usuarios = this._userService.getUsuarios();
  }

  // agregarMensaje(mensaje: string){
  //   this.mensajes.push();
  // }
}
