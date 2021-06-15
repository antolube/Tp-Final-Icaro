import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RecibidosComponent } from './recibidos/recibidos.component';
import { EnviadosComponent } from './enviados/enviados.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NavModule } from '../nav/nav.module';
import { InteractionsService } from 'src/app/services/interactions.service';



@NgModule({
  declarations: [
    RecibidosComponent,
    EnviadosComponent,
    NuevoComponent,
    DashboardComponent
  ],
  imports:[
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    NavModule,
  ],

  exports: [EnviadosComponent,RecibidosComponent,NuevoComponent,DashboardComponent]
})
export class DashboardModule { }
