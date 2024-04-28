import { Component } from '@angular/core';
import { ActorService } from '../../../services/actor.service';
import { Actor } from '../../../interfaces/actor';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-actores-list',
  templateUrl: './actores-list.component.html',
  styleUrl: './actores-list.component.css'
})
export class ActoresListComponent {
    listaActores:Actor[]=[];
    formularioActor!:FormGroup;
  /**
   *
   */
  constructor(private _actorServicio: ActorService,
    private fb:FormBuilder
  ) {
      this.formularioActor=this.fb.group({
        nombre:[""] 
      });
  }

  obtenerActores(){
    this._actorServicio.getList().subscribe({
        next:(data) => {
          this.listaActores = data;
        },
      error:(err)=>{
        alert('Se ha producido un error: ' + err?.message);
      }
      });
  }

  ngOnInit(): void {
    this.obtenerActores();
  }

  agregarActor(){
    const request:Actor = {
      id:0,
      nombre: this.formularioActor.value.nombre
    }
    this._actorServicio.add(request).subscribe({
      next:(data) => {
        this.listaActores.push(data);
        this.formularioActor.patchValue({
          nombre: ""
        });
      },
      error:(err)=>{
        alert('Se ha producido un error: ' + err?.message);
      }
    });
  }
  
  eliminarActor(actor:Actor){
    this._actorServicio.delete(actor.id).subscribe({
      next:(data) => {
        const nuevaLista = this.listaActores.filter(item => item.id!= actor.id)
        this.listaActores = nuevaLista;
      },
      error:(err)=>{
        alert('Se ha producido un error: ' + err?.message);
      }
    });
  }
}

