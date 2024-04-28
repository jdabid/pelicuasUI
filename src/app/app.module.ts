import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasListComponent } from './pages/peliculas/peliculas-list/peliculas-list.component';
import { ActoresListComponent } from './pages/actores/actores-list/actores-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerosListComponent } from './pages/generos/generos-list/generos-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PeliculasEditComponent } from './pages/peliculas/peliculas-edit/peliculas-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasListComponent,
    ActoresListComponent,
    GenerosListComponent,
    MenuComponent,
    PeliculasEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
