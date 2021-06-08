import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios=[
    {
      username:'anto',
      name:'pepe',
      lastname:'apellido',
      password:'admin1234',
      confirmPassword:'admin1234',
      email:'anto@gmail.com',
      country:'Argentina',
      city:'Cordoba',
    },
    {
      username:'anto',
      name:'pipa',
      lastname:'apellido',
      password:'admin1234',
      confirmPassword:'admin1234',
      email:'anto@gmail.com',
      country:'Argentina',
      city:'Cordoba',
    },
    {
      username:'anto',
      name:'papu',
      lastname:'apellido',
      password:'admin1234',
      confirmPassword:'admin1234',
      email:'anto@gmail.com',
      country:'Argentina',
      city:'Cordoba',
    },
    {
      username:'anto',
      name:'pipi',
      lastname:'apellido',
      password:'admin1234',
      confirmPassword:'admin1234',
      email:'anto@gmail.com',
      country:'Argentina',
      city:'Cordoba',
    },
    {
      username:'anto',
      name:'pumpum',
      lastname:'apellido',
      password:'admin1234',
      confirmPassword:'admin1234',
      email:'anto@gmail.com',
      country:'Argentina',
      city:'Cordoba',
    },
    {
      username:'anto',
      name:'pampam',
      lastname:'apellido',
      password:'admin1234',
      confirmPassword:'admin1234',
      email:'anto@gmail.com',
      country:'Argentina',
      city:'Cordoba',
    },
  ]
  constructor() { }

  getUsuarios(){
    return this.usuarios.slice();
  }
}
