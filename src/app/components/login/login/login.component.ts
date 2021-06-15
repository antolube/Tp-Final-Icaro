import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { InteractionsService } from 'src/app/services/interactions.service';
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

  constructor(private fb :FormBuilder ,
    private _snackbar:MatSnackBar,
    private router:Router,
    private _usuariosService:UsuariosService,
    private _interactionsService:InteractionsService,
    private _comunicacion:InteractionsService) {

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

    if(usuario == "anto" && password == "a" ){
      //redireccionamos al escritorio de usuario
      this.fakelogin();
      // this.usuarioLogeado();
      this.comunicoUsuario();
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
  comunicoUsuario(){
    this._comunicacion.saveUser(this.form.value.usuario);
    console.log("estoy tomando este dato para pasarlo :",this.form.value.usuario);
  }
}
// onSubmit(){
//   this._interactionsService.agregarUsuario(this.form.value.usuario);
//   console.log("estoy por pasar este usuario al servicio:",this.form.value.usuario);
// }

// usuarioLogeado(){
//   this._interactionsService.sendUser(this.form.value.usuario);
//   console.log(this.form.value.usuario);
// }
