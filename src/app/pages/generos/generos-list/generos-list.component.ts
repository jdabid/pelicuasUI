import { Component } from '@angular/core';
import { Genero } from '../../../interfaces/genero';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneroService } from '../../../services/genero.service';

@Component({
  selector: 'app-generos-list',
  templateUrl: './generos-list.component.html',
  styleUrl: './generos-list.component.css'
})
export class GenerosListComponent {

  listaGeneros:Genero[]=[];
    formularioGenero!:FormGroup;
  /**
   *
   */
  constructor(private _generoServicio: GeneroService,
    private fb:FormBuilder
  ) {
      this.formularioGenero=this.fb.group({
        nombre:[""] 
      });
  }

  obtenerGeneros(){
    this._generoServicio.getList().subscribe({
        next:(data) => {
          this.listaGeneros = data;
        }
      });
  }

  ngOnInit(): void {
    this.obtenerGeneros();
  }

  agregarGenero(){
    const request:Genero = {
      id:0,
      nombre: this.formularioGenero.value.nombre
    }
    this._generoServicio.add(request).subscribe({
      next:(data) => {
        this.listaGeneros.push(data);
        this.formularioGenero.patchValue({
          nombre: ""
        })
      }
    });
  }
  
  eliminarGenero(genero:Genero){
    this._generoServicio.delete(genero.id).subscribe({
      next:(data) => {
        const nuevaLista = this.listaGeneros.filter(item => item.id!= genero.id)
        this.listaGeneros = nuevaLista;
      }
    });
  }

}
