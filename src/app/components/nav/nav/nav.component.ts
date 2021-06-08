import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../../services/usuarios.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  usuarios: Usuario [] =[];
  constructor(private _usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioActual();
  }

  usuarioActual(){
    return this.usuarios = this._usuarioService.getUsuarios();

  }

}
