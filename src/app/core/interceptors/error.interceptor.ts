import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, Observable, of, throwError } from "rxjs";
import { AuthState, logout } from "src/app/features/auth/state";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    readonly errorListToSignoutUser: number[] = [401, 403];

    constructor(private store:Store<AuthState>){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(this.handleError.bind(this));
    }

    handleError(source:Observable<any>):Observable<any>{
        return source.pipe(catchError(error => {
            if(this.shouldUserSignout(error))  this.store.dispatch(logout());
            return throwError(() => error);
        }))
    }

    shouldUserSignout(error:any):boolean{        
        return this.errorListToSignoutUser.includes(error.status);
    }
}