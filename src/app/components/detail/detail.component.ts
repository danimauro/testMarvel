import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  public personaje: any;
  public stories: any;
  public comics: any;

  //banderas
  public noResults: boolean;
  public noResultsComics: boolean;
  public load: boolean;

  constructor(public _activatedRoute:ActivatedRoute, private _personService: PersonajeService) {  

    //Captura el codigo de la url que corresponde al id del personaje
    this._activatedRoute.params.subscribe( params => {
      this.getPersonajeId(params['id']);     
      this.getComicsPersonaje(params['id']);
    });    

  }

  getPersonajeId(id:number){
    
    if(!id){
      return;
    }

    this._personService.buscarPersonajeId(id).subscribe( (person:any) => {
      //Se inicializa una bandera que mostrara un mensaje indicando que no hay resultados
      if(person.length === 0){
        //bandera
        this.noResults = true;
      }
      this.personaje = person;
      this.stories = person.stories.items;
      this.stories.splice(4,15);
      
      this.load = true;

    }, (errorService) => {
      console.log(errorService)
    });
    
  }

  getComicsPersonaje(id:number){
    this._personService.buscarComicsPersonaje(id).subscribe((resComics:any) => {
      if(resComics.length === 0){
        this.noResultsComics = true;
      }
      this.comics = resComics;
      this.comics.splice(4,15);

    })
  }


}
