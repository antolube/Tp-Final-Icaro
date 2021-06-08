import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private fb: FormBuilder) {

    this.register = this.fb.group({
      username:['', Validators.required,'^[a-zA-Z ]*$'],
      name:['', Validators.required,'^[a-zA-Z ]*$'],
      lastname:['', Validators.required,'^[a-zA-Z ]*$'],
      password:['', Validators.required,'((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{6,18}\w)'],
      confirmPassword:['', Validators.required,'((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{6,18}\w)'],
      email:['', Validators.required,Validators.email],
      province:['', Validators.required],
      city:['', Validators.required],

    })
  }
  ngOnInit(): void {
  }

}
