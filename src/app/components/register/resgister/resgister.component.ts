import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InteractionsService } from 'src/app/services/interactions.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario} from '../../../models/usuario';

interface Province{
  value: string;
  viewValue: string;
}
interface Country{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.scss']
})
export class ResgisterComponent implements OnInit {


  register: FormGroup;
  panelOpenState = false;
  hide = true;
  loading= false;

  provinces: Province[] = [
    {value: 'Cba-0', viewValue: 'Córdoba'},
    {value: 'Sta.Fe-1', viewValue: 'Santa Fé'},
    {value: 'Bs.As-2', viewValue: 'Buenos Aires'}
  ];

  countries: Country[] = [
    {value: 'Arg', viewValue: 'Argentina'},
    {value: 'Chi', viewValue: 'Chile'},
    {value: 'Uru', viewValue: 'Ururguay'}
  ];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuariosService:UsuariosService ,
    private _snackbar:MatSnackBar,
    private _comunicacion:InteractionsService) {

    this.register = this.fb.group({
      username:['', Validators.required,],
      name:['', Validators.required,],
      lastname:['', Validators.required],
      password:['', Validators.required,],
      confirmPassword:['', Validators.required,],
      email:['', Validators.required],
      city:['', Validators.required],
      country:['', Validators.required],

    })
  }
  ngOnInit(): void {
  }



  ingresarNuevo(){
    console.log(this.register);

    const user : Usuario = {
      username: this.register.value.username,
      name: this.register.value.name,
      lastname: this.register.value.lastname,
      password: this.register.value.password,
      confirmPassword: this.register.value.confirmPassword,
      email: this.register.value.email,
      country: this.register.value.country,
      city: this.register.value.city,
    }

    console.log(user);

    this._usuariosService.agregarUsuario(user);
    this.fakelogin();
    this.registroOk();
    this.comunicoUsuario();


  }

  fakelogin(){
    this.loading= true;
    setTimeout(()=>{
      //redirecccionamos al al escritorio
      // this.loading= false;
      this.router.navigate(['/dashboard']);
    },1500
    );
  }

  registroOk(){
    this._snackbar.open('Resgistro OK','',
      {
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'top',
        }
    );
  }
  comunicoUsuario(){
    this._comunicacion.saveUser(this.register.value.username);
    console.log("estoy tomando este dato para pasarlo :",this.register.value.username);
  }

}
