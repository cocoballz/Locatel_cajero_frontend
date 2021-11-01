import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/partials/navbar/navbar.component';
import { DashboardComponent } from './componentes/partials/dashboard/dashboard.component';
import { FooterComponent } from './componentes/partials/footer/footer.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { ModificarCuentaComponent } from './componentes/modificar-cuenta/modificar-cuenta.component';
import { CrearUserComponent } from './componentes/crear-user/crear-user.component';
import { LoginComponent } from './componentes/login/login.component';
import { SearchComponent} from "./componentes/search/search.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    CrearCuentaComponent,
    ModificarCuentaComponent,
    CrearUserComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
