import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { SigninPyload, SignupPyload } from "../models/interfaces";
import { logout, signinRequest, signupRequest } from "./auth.actions";
import { selectIsLoggedIn, selectUser } from "./auth.selectors";
import { AuthState } from "./auth.state";

@Injectable({providedIn:'root'})
export class AuthFacade{
    getUser$: Observable<any>;
    getIsloggedIn$: Observable<boolean>;

    constructor(private store: Store<AuthState>){
        this.getUser$ = store.select(selectUser);
        this.getIsloggedIn$ = store.select(selectIsLoggedIn);
    }

    signinRequest(signinPyload:SigninPyload): void{
        this.store.dispatch(signinRequest({signinPyload}));
    }

    signupRequest(signupPyload:SignupPyload): void{
        this.store.dispatch(signupRequest({signupPyload}));
    }

    logout():void{
        this.store.dispatch(logout());
    }

}