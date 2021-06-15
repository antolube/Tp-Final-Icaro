import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/models/message';
import { Usuario } from 'src/app/models/usuario';

import { SendService } from 'src/app/services/send.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  usuarios: Usuario [] =[];
  loading= false;
  form: FormGroup;


  // mensajes: Mensaje[] = [];

  constructor(private _userService: UsuariosService,
    private _sendService:SendService,
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,
    ) {

    this.form = this.fb.group({
      remitente:['', Validators.required],
      fecha:new Date(),
      mensaje:['', Validators.required]
    })
  }



  ngOnInit(): void {

    this.getTraerUsuarios();
    this.SendMsj();


  }

  getTraerUsuarios(){
    this.usuarios = this._userService.getUsuarios();
  }

  SendMsj(){


    const mensajes : Mensaje = {
      remitente:this.form.value.remitente,
      fecha:this.form.value.fecha,
      mensaje:this.form.value.mensaje,
    }
    this._sendService.agregarMensaje(mensajes);
    this.form.reset();

    }

}


