import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { DashboardComponent } from "./componentes/partials/dashboard/dashboard.component";
import { CrearUserComponent } from "./componentes/crear-user/crear-user.component";
import {CrearCuentaComponent} from "./componentes/crear-cuenta/crear-cuenta.component";
import {ModificarCuentaComponent} from "./componentes/modificar-cuenta/modificar-cuenta.component";
import {SearchComponent} from "./componentes/search/search.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: CrearUserComponent},
  {path: 'inicio', component: DashboardComponent},
  {path: 'new_acount', component: CrearCuentaComponent},
  {path: 'tramtites', component: ModificarCuentaComponent},
  {path: 'search_acount', component: SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
