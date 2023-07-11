import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map} from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
    private baseUrl :string = environments.baseUrl;
    constructor(private httpClient : HttpClient) { }
    
    getHeroes():Observable<Hero[]>{
       return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getHeroById(id:string): Observable<Hero | undefined>{

        return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${ id }`)
            .pipe(
                catchError( error=> of(undefined))
            )
    }

    getSuggestions(query:string):Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&limit=6`);
    }

    createHero( hero: Hero ): Observable<Hero>{
        return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`,hero);
    }
    
    updateHero( hero: Hero ): Observable<Hero>{
        if(!hero.id) throw Error('Hero id is required');

        return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero);
    }

    deleteHeroById( id_hero: string ): Observable<Boolean>{
        
        return this.httpClient.delete(`${this.baseUrl}/heroes/${id_hero}`)
        .pipe(
            map( resp => true),
            catchError(error => of(false)),
        );
    }
}