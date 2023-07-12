import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl = environments.baseUrl;
    private user? : User;

    constructor(
        private httpClient: HttpClient,
        private router: Router) { }

    get currentUser():User|undefined{
        if(!this.user) return undefined;

        return structuredClone(this.user);
    }

    login(email:string,password:string):Observable<User>{

       return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap( (user:User) => this.user = user),
                tap( (user:User) => localStorage.setItem('userID',user.id.toString()))
            )
    }

    logout(){
        this.user = undefined;
        localStorage.removeItem('userID');
        this.router.navigate(['/auth'])
    }

    checkAuthStatus():Observable<boolean> | boolean{
        if( !localStorage.getItem('userID')) return false;

        return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap(user => this.user = user),
                map(user => !!user),
                catchError(err => of(false))
            )
    }
    
}