import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PermisionService {

    constructor(private route:Router) { }
    
    canMatch(route:Route,segments:UrlSegment[]):boolean | Observable<boolean>{
        
        console.log('canMatch');
        console.log({route,segments});
        
        return true;
    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean|Observable<boolean>{
        console.log('canActivate');
        console.log({route,state});
        
        return true;
    }
    
    
}

export const AuthGuardMatch : CanMatchFn = (route:Route,segments:UrlSegment[]):boolean | Observable<boolean> =>{
    return inject(PermisionService).canMatch(route,segments)
}
export const AuthGuardActivate : CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | Observable<boolean> => {
    return inject(PermisionService).canActivate(route,state)
}