import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  user: [] =[];

  private _comunicacion= new Subject <[]>();
  comunicacionUsuario$= this._comunicacion.asObservable();


  saveUser(user: any){
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log("estoy recibiendo este usuario del login:",user);
  }

  getUser(){
    return localStorage.getItem('currentUser');
  }

  // loginTrue(){
  //    const login = true;
  // };

  constructor() {
  }
}
// private usuario:any[]=[];
// private usuario$:Subject<any[]>;

// // getUsurioIngresado(){
  // //   return this.usuario;
  // // }

  // this.usuario = [];
  // this.usuario$ = new Subject();

  // agregarUsuario(aUsuario :any){
    //   this.usuario.push(aUsuario);
    //   this.usuario$.next(this.usuario)
    //   console.log("estoy en agregarusuario:", aUsuario)
    // }
    // getUsuarios$():Observable<any[]>{
      //   return this.usuario$.asObservable();
      // }
// private _usuarioLogeadoSource = new Subject<string>();
// usuarioLogeado$= this._usuarioLogeadoSource.asObservable();
// sendUser(usuario:string){
//   this._usuarioLogeadoSource.next(usuario);
//   console.log("el nombre que paso es :",usuario);
// }
// sendUsuario(usuario: string){
//   this._comunicacion.next(usuario);
//   console.log("estoy recibiendo al usuario:",usuario);
// }
// getUsuario$(){//   return this.comunicacionUsuario$;
// }
