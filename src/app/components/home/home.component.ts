import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public personajes: any;
  
  //banderas
  public noResults: boolean;

  constructor(private _personService: PersonajeService) { }

  ngOnInit() {
  }
  
  //Busca un personaje por el nombre
  buscarPersonaje(personaje:string){
    if(!personaje){
      return;
    }
    
    this._personService.buscarPersonajesNombre(personaje).subscribe( (person:any) => {
      //Se inicializa una bandera que mostrara un mensaje indicando que no hay resultados
      this.noResults = false;
      if(person.length === 0){
        //bandera
        this.noResults = true;
      }
      this.personajes = person;

    }, (errorService) => {
      console.log(errorService)
    });
  }

}
