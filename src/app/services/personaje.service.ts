import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  //variables privadas del servicio
  private url:string = environment.apiUrl;
  private apiKey:string = environment.apiKey;

  constructor(private http:HttpClient) { }

  //Busca un personaje por el nombre
  buscarPersonajesNombre(nomPersonaje){
    return this.http.get(`${this.url}?nameStartsWith=${nomPersonaje}&apikey=${this.apiKey}`)
                    .pipe( map( (resPersonajes:any) => {
                        return resPersonajes.data.results;
                    }));
  }

  //Busca un personaje por el nombre
  buscarPersonajeId(id){
    return this.http.get(`${this.url}/${id}?apikey=${this.apiKey}`)
                    .pipe( map( (resPersonaje:any) => {
                        return resPersonaje.data.results[0];
                    }));
  }

  //Busca un cómic por el id del personaje
  buscarComicsPersonaje(id){
    return this.http.get(`${this.url}/${id}/comics?orderBy=-onsaleDate&apikey=${this.apiKey}`)
                    .pipe( map( (resComics:any) => {
                        return resComics.data.results;
                    }));

  }
}
