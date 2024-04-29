# Descripción
Este proyecto es el desarrollo front-end de la aplicacion PeliculasAPI
En este proyecto se puede crear películas, actores y géneros, los usuarios podrán modificar las películas agregando o quitando géneros al igual que con los actores. Con httpClient se realiza la comuncación con el servidor

Utilicé varias tecnologías para crear la aplicación en front-end
Angular CLI: 17.3.6, bootstrap 3.3 Node: 20.12.2, environments, reglas de ruteo, github.

# ActoresPeliculasUI
Este proyecto se generó con Angular CLI versión 17.3.6.

## Lanzar la aplicación
Ejecute `ng serve` para ejecutar la aplicacion. Navegue hasta http://localhost:4200/.

# environments
Se definió el endPoint para realizar la conexión con la aplicación Back-end, esta variable es usada en los servicios.

# Composición de componentes
```
index:
    menu.component
    app.component

menu.component -
    peliculas.list.component - peliculas.edit.component
    actores.list.component
    generos.list.component
```           

# Rutas

Las rutas en Angular permiten definir cómo navegan los usuarios dentro de la aplicación
- Se definió AppRoutingModule con las rutas dentro de la aplicación
 ```json
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
 ```
- AppRoutingModule se incluyó al app.modulo

- Se agregó `<router-outlet></router-outlet>` en app.component para renderizar los componentes.

# Formularios
`FormsModule, ReactiveFormsModule`
Por medio de estos módulos se puede construir controles dentro de un formulario, se configuró en los import de app.Modules, y se utilizaron en los componentes para generar los objetos.

Ejemplo ReactiveForms:

```html
<form [formGroup]="formularioPelicula">
 <div class="input-group mb-3">
     <input type="text" class="form-control" placeholder="Ingresar nueva pelicula" formControlName="nombre">
     <button class="btn btn-primary" type="button"[disabled]="formularioPelicula.invalid"
     (click)="agregarPelicula()"
     >Agregar</button>
 </div>
 </form>

```

```ts
formularioPelicula!:FormGroup;
this.formularioPelicula=this.fb.group({
      nombre:[""] 
    });
```

Ejemplo Forms
```html
    <li class="list-group-item" *ngFor="let actordetalle of peliculaDetalle?.actores">
        <input type="text" class="form-control" placeholder="Personaje" [(ngModel)]="actordetalle.personaje" >
        
    </li>
```

# Servicios
Los servicios son una forma de crear código que se puede utilizar en diferentes partes de la aplicación. En esta aplicación se creó un servicio para cada entidad de la aplicación.
`pelicula.service, actor.service, genero.service`

# Bootstrap
Bootstrap es un framework que ofrece una serie de características que se pueden implementar en una aplicación web de forma rápida y sencilla.

En este proyecto se instaló ejecutando `npm install bootstrap@5.3.3`, y luego en el archivo `angular.son` se agregó así:


```json 
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"   
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
          ] 
```
          
# github
Plataforma de desarrollo de software que se utiliza para almacenar, supervisar y trabajar con proyectos de software

# url git proyecto .net
https://github.com/jdabid/PeliculasAPI
