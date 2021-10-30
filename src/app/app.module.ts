import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { ModificarCuentaComponent } from './componentes/modificar-cuenta/modificar-cuenta.component';
import { CrearUserComponent } from './componentes/crear-user/crear-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    CrearCuentaComponent,
    ModificarCuentaComponent,
    CrearUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
