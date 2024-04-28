import { Component } from '@angular/core';
import { Pelicula } from '../../../interfaces/pelicula';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculaService } from '../../../services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrl: './peliculas-list.component.css'
})
export class PeliculasListComponent {

  
  listaPeliculas:Pelicula[]=[];
  formularioPelicula!:FormGroup;
/**
 *
 */
constructor(private _peliculaServicio: PeliculaService,
  private fb:FormBuilder,
  private route: Router
) {
    this.formularioPelicula=this.fb.group({
      nombre:[""] 
    });
}

obtenerPeliculas(){
  this._peliculaServicio.getList().subscribe({
      next:(data:any) => {
        this.listaPeliculas = data;
      }
    });
}

ngOnInit(): void {
  this.obtenerPeliculas();
}

agregarPelicula(){
  const request: Pelicula = {
    id:0,
    titulo: this.formularioPelicula.value.nombre,
    encines: false,
    fechaEstreno: new Date,
    generosIDs:[]
  }
  this._peliculaServicio.add(request).subscribe({
    next:(data) => {
      this.listaPeliculas.push(data);
      this.formularioPelicula.patchValue({
        nombre: ""
      })
    }
  });
}

eliminarPelicula(pelicula:Pelicula){
  this._peliculaServicio.delete(pelicula.id).subscribe({
    next:(data) => {
      const nuevaLista = this.listaPeliculas.filter(item => item.id!= pelicula.id)
      this.listaPeliculas = nuevaLista;
    }
  });
}

llamarEditarPelicula(id:number){
  this.route.navigate([`/peliculas/${id}`]);


}

}
