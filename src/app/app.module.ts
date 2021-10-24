import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,

    HomeComponent,
    PaginaNaoEncontradaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
