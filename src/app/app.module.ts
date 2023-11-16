import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing,appRoutingProvider } from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';


import { ServiceDepartamentos } from './services/service.departamentos';
import { InsertarComponent } from './components/insertar/insertar.component';
import { EditdepartamentoComponent } from './componets/editdepartamento/editdepartamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertarComponent,
    EditdepartamentoComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProvider,ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
