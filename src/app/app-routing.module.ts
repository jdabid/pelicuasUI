import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasListComponent } from './pages/peliculas/peliculas-list/peliculas-list.component';
import { ActoresListComponent } from './pages/actores/actores-list/actores-list.component';
import { GenerosListComponent } from './pages/generos/generos-list/generos-list.component';
import { PeliculasEditComponent } from './pages/peliculas/peliculas-edit/peliculas-edit.component';

const routes: Routes = [{
    path:'actores', component: ActoresListComponent
  },
  {
    path: 'peliculas', component: PeliculasListComponent
  },
  {
    path: 'generos', component: GenerosListComponent
  },
  {
    path: 'peliculas/:idpelicula', component: PeliculasEditComponent
  },
  {
    path: '**', redirectTo: 'peliculas', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
