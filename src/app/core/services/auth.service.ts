import { HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap } from "rxjs";
import { AuthenticatedUserData, AuthenticationResponse, SigninPyload, SignupPyload } from "src/app/features/auth/models/interfaces";
import { environment } from "src/environments/environment";
import { ApiHttpService } from "../adapters/api-http.service";
import { FormatterUtil } from "../helpers";
import { User } from "../models/classes";
import { TokenStorageService } from "./token-storage.service";

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private apiHttp:ApiHttpService, private tokenStorageService:TokenStorageService){}

    signin(signinPyload:SigninPyload):Observable<User>{
        const body = { ...signinPyload };
        return this.apiHttp.post<AuthenticationResponse>(`${environment.apiBaseUrl}auth/local`,body)
        .pipe(
            map(authResponse=>new User(authResponse))
        );
    }

    signup(signupPyload:SignupPyload):Observable<User>{
        return this.apiHttp.post<AuthenticationResponse>(
                    `${environment.apiBaseUrl}auth/local/register`,
                    { ...signupPyload }
                ).pipe(FormatterUtil.formatAuthResponseToUser)
    }

    logout():void{
        this.tokenStorageService.removeAccessToekn();
    }

    getAuthenticatedUser():Observable<User>{
        const TOKEN: string = this.tokenStorageService.getAccessToken();
        return this.apiHttp.get<AuthenticatedUserData>(`${environment.apiBaseUrl}users/me`)
        .pipe(
            map(authenticatedUserData => FormatterUtil.formatAuthenticatedUserDataToUser(authenticatedUserData,TOKEN)),
            catchError(error => of())
        );
    }



}