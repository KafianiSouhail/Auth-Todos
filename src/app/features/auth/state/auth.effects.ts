import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap, throwError } from "rxjs";
import { MyNotificationService } from "src/app/core/adapters";
import { MyRoutes } from "src/app/core/models/enums";
import { AuthService } from "src/app/core/services/auth.service";
import { TokenStorageService } from "src/app/core/services/token-storage.service";
import { logout, signinRequest, signinSuccess, signupRequest, signupSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects{
    constructor
    (
        private actions$: Actions,
        private notificationService: MyNotificationService,
        private authService: AuthService,
        private tokenStorageService: TokenStorageService,
        private router:Router
    )
    {}

    signupRequest$ = createEffect(() => this.actions$.pipe(
        ofType(signupRequest),
        switchMap(action => {
            return this.authService.signup(action.signupPyload).pipe(
                map(user => signupSuccess({user})),
                catchError(error => {
                    this.notificationService.openError(
                        'auth.notifications.sign-up-failed',
                        {}
                    );
                    return throwError(() => new Error(error));
                })
            )
        })
    ));

    signinRequest$ = createEffect(() => this.actions$.pipe(
        ofType(signinRequest),
        switchMap(action => {
            return this.authService.signin(action.signinPyload).pipe(
                map(user => signinSuccess({user})),
                catchError(error => {
                    this.notificationService.openError(
                        'auth.notifications.sign-in-failed',
                        {}
                    );
                    return throwError(() => new Error(error));
                })
            )
        })
    ));


    userHasBeenAuthenticatedSuccessefully$ = createEffect(() => this.actions$.pipe(
        ofType(signinSuccess,signupSuccess),
        tap(action => {
            this.tokenStorageService.saveAccessToken(action.user.accessToken);
            this.notificationService.openSuccess(
                'auth.notifications.auth-success',
                {}
            );
            this.router.navigate([MyRoutes.TODOS])
        })
    ),
    {dispatch:false});

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(logout),
        tap(_ => this.authService.logout())
    ),
    {dispatch: false});
}