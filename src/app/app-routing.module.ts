import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasListComponent } from './pages/peliculas/peliculas-list/peliculas-list.component';
import { ActoresListComponent } from './pages/actores/actores-list/actores-list.component';
import { GenerosListComponent } from './pages/generos/generos-list/generos-list.component';

const routes: Routes = [{
  path:'actores', component: ActoresListComponent
},
{
  path: 'peliculas', component: PeliculasListComponent
},
{
  path: 'generos', component: GenerosListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
