import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable, take } from "rxjs";
import { selectIsLoggedIn } from "src/app/features/auth/state";
import { MyRoutes } from "../models/enums";
import { AppState } from "../state";

@Injectable({providedIn: 'root'})
export class NoAuthGuard implements CanLoad, CanActivate{

    constructor(private router:Router, private store:Store<AppState>){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return this.store.select(selectIsLoggedIn)
       .pipe(this.handleUserAuthenticationStatus.bind(this));
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.select(selectIsLoggedIn)
        .pipe(this.handleUserAuthenticationStatus.bind(this));
    }

    handleUserAuthenticationStatus(source: Observable<boolean>): Observable<boolean | UrlTree>{
        return source.pipe(
            take(1),
            map((isLoggedIn:boolean) => {                
                if(isLoggedIn) return this.router.createUrlTree(['/'+MyRoutes.HOME]);
                return !isLoggedIn;
            })
        )
    }

}