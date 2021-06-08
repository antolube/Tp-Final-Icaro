import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario [] =[];
  hide = true;

  form: FormGroup;
  loading= false;

  constructor(private fb :FormBuilder , private _snackbar:MatSnackBar, private router:Router, private _usuariosService:UsuariosService) {

    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    });

   }

  ngOnInit(): void {
  }

  cargarUsuarios(){
    this.usuarios = this._usuariosService.getUsuarios();
  }

  ingresar(){
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == "a" && password == "a" ){
      //redireccionamos al escritorio de usuario
      this.fakelogin();
    }else{
      //mostrar mensaje de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackbar.open('Usuario o Contraseña Incorrectos','',
      {
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'top',

        }
    );
  }

  fakelogin(){
    this.loading= true;
    setTimeout(()=>{

      //redirecccionamos al al escritorio
      // this.loading= false;
      this.router.navigate(['dashboard']);
    },1500
    );
  }

}
