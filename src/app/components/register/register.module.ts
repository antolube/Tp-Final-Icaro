import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResgisterComponent } from './resgister/resgister.component';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginModule } from '../login/login.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ResgisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoginModule,
    RouterModule
  ],
  exports: [ResgisterComponent]
})
export class RegisterModule { }
