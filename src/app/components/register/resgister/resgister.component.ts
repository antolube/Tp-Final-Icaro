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
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
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
      telefono:['', Validators.required,'^[\d ]*$'],
      address:['', Validators.required,],
      province:['', Validators.required],
      city:['', Validators.required],

    })
  }
  ngOnInit(): void {
  }

}
