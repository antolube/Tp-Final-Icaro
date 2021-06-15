import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NavModule } from '../nav/nav.module';
import { RouterModule } from '@angular/router';
import { InteractionsService } from 'src/app/services/interactions.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavModule,
    RouterModule
  ],providers:[InteractionsService],
  exports: [LoginComponent]
})
export class LoginModule { }
