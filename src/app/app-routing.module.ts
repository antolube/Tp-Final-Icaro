import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ResgisterComponent } from './components/register/resgister/resgister.component';

 const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component: ResgisterComponent},
  {path:'dashboard',
  loadChildren:()=>import('./components/dashboard/dashboard.module').
  then(x=>x.DashboardModule)},
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
