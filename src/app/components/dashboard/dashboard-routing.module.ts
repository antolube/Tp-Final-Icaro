import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnviadosComponent } from './enviados/enviados.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RecibidosComponent } from './recibidos/recibidos.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path:'recibidos', component:RecibidosComponent},
    {path:'enviados', component:EnviadosComponent},
    {path:'nuevo', component:NuevoComponent,},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
