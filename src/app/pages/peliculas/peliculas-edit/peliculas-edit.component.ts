import { Component, OnInit } from '@angular/core';
import { Actor } from '../../../interfaces/actor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculaService } from '../../../services/pelicula.service';
import { of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDetalle } from '../../../interfaces/peliculadetalles';
import { Genero } from '../../../interfaces/genero';
import { GeneroService } from '../../../services/genero.service';
import { Pelicula } from '../../../interfaces/pelicula';
import { ActorDetalle } from '../../../interfaces/actordetalle';
import { ActorService } from '../../../services/actor.service';
import { PeliculaCreacion } from '../../../interfaces/peliculacreacion';
import { ActoresPeliculaCreacion } from '../../../interfaces/actorespeliculacreacion';

@Component({
  selector: 'app-peliculas-edit',
  templateUrl: './peliculas-edit.component.html',
  styleUrl: './peliculas-edit.component.css'
})
export class PeliculasEditComponent implements OnInit {
  listaActores:Actor[]=[];
  formularioPelicula!:FormGroup;
  idPelicula:number = 0;
  peliculaDetalle: PeliculaDetalle = {
    titulo: "",
    id:0,
    generos: [],
    generosIDs: [],
    encines: false,
    actores:[],
    fechaEstreno: new Date
  };
  listaGeneros:Genero[]=[];
  
  mostrarVistaGeneros:boolean = true;
  estiloGenero:string = "nav-link active";
  estiloActor:string = "nav-link";

  constructor(private _peliculaServicio: PeliculaService,
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private _generoServicio: GeneroService,
    private _actorServicio: ActorService
  ) {
    this.formularioPelicula = this.fb.group({
      titulo:[""] 
    });    
  }

  ngOnInit(): void {
    const valor = this.route.snapshot.paramMap.get('idpelicula');
    if (!isNaN(Number(valor))) {
      this.idPelicula = Number(valor);
      this.obtenerPelicula(this.idPelicula);
    }
    
  }

  obtenerGeneros(){
    this._generoServicio.getList().subscribe({
        next:(data) => {
          this.listaGeneros = data;
          this.removeGenerosExistentes();
        },
        error:(err)=>{
          alert('Se ha producido un error: ' + err?.message);
        }
      });
  }

  removeGenerosExistentes(){
    for (let i = 0; i < this.peliculaDetalle?.generos?.length; i++) {
      const generoPeli = this.peliculaDetalle?.generos[i];
      const index = this.listaGeneros.findIndex(p=>p.id === generoPeli.id);
      
      //eliminar registros en el segundo arreglo
      if(index!=-1){
        this.listaGeneros.splice(index, 1);
      }
      
    }
  }

  obtenerPelicula(id:number){
    this._peliculaServicio.getPelicula(id).subscribe({
      next:(data:any) => {
        this.peliculaDetalle = data;

        this.formularioPelicula = this.fb.group({
          titulo:[this.peliculaDetalle.titulo] 
        });   

        this.obtenerGeneros();
        this.listarActores();
      },
        error:(err)=>{
          alert('Se ha producido un error: ' + err?.message);
        }
    });
  }

  agregarGeneroPelicula(genero: Genero){
    this.peliculaDetalle.generos.push(genero);
    const index = this.listaGeneros.findIndex(p=>p.id === genero.id);
      
      //eliminar registros en el segundo arreglo
      if(index!=-1){
        this.listaGeneros.splice(index, 1);
      }
  }

  borrarGeneroPelicula(genero: Genero){
    this.listaGeneros.push(genero);
    const index = this.peliculaDetalle.generos.findIndex(p=>p.id === genero.id);
      //eliminar registros en el segundo arreglo
      if(index!=-1){
        this.peliculaDetalle.generos.splice(index, 1);
      }
  }

  borrarActorPelicula(actorDetalle:ActorDetalle){
    const actorPelicula:Actor = {
      id: actorDetalle.actorId,
      nombre: actorDetalle.nombrePersona
    }
    this.listaActores.push(actorPelicula);

    const index = this.peliculaDetalle.actores.findIndex(p=>p.actorId === actorDetalle.actorId);
      //eliminar registros en el segundo arreglo
      if(index!=-1){
        this.peliculaDetalle.actores.splice(index, 1);
      }

  }

  agregarActorPelicula(actor:Actor){
    //agregar en lista detalles 
    const actorDetalle: ActorDetalle = {
      actorId: actor.id,
      nombrePersona: actor.nombre,
      personaje: ""
    }
    this.peliculaDetalle.actores.push(actorDetalle);

    //borrar en lista general
    const index = this.listaActores.findIndex(p=>p.id === actor.id);
    if (index!=-1) {
      this.listaActores.splice(index,1);
    }
  }

  editarPelicula(){

    let actoresAguardar: ActoresPeliculaCreacion[] = [];
    for (let i = 0; i < this.peliculaDetalle.actores.length; i++) {
      const actorPeliculaDetalle = this.peliculaDetalle.actores[i];
      const actorespeliculacreacion: ActoresPeliculaCreacion = {
        actorId: actorPeliculaDetalle.actorId,
        personaje: actorPeliculaDetalle.personaje
      };
      actoresAguardar.push(actorespeliculacreacion);
    }

    const datosPelicula: PeliculaCreacion = {
      id: this.peliculaDetalle.id, 
      titulo: this.peliculaDetalle.titulo,
      encines: this.peliculaDetalle.encines,
      fechaEstreno: this.peliculaDetalle.fechaEstreno,
      generosIDs: this.peliculaDetalle.generos.map(p=>p.id),
      actores: actoresAguardar
    };
    this._peliculaServicio.editar(datosPelicula).subscribe({
      next:() => {
        alert('La película se editó con éxito');
      },
      error:(err)=>{
        alert('Se ha producido un error: ' + err?.message);
      }
    });  
  }

  listarActores(){
    this._actorServicio.getList().subscribe({
      next:(data) => {
        this.listaActores = data;
      },
      error:(err)=>{
        alert('Se ha producido un error: ' + err?.message);
      }
    });    
    
  }

  cambiarVistaGenero(mostrar:boolean){
    if(mostrar == true){
      this.mostrarVistaGeneros = true;
      this.estiloGenero = "nav-link active";
      this.estiloActor = "nav-link";
    }else
    {
      this.mostrarVistaGeneros = false;
      this.estiloGenero = "nav-link";
      this.estiloActor = "nav-link active";
    }
    
  }

  

}
