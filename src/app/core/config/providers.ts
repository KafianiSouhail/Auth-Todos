import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, Injectable, Provider } from "@angular/core";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { AuthState } from "src/app/features/auth/state";
import { Helper } from "../helpers";
import { ErrorInterceptor, TokenInterceptor } from "../interceptors";
import { LoaderInterceptor } from "../interceptors/loader.interceptor";
import { AuthService } from "../services/auth.service";
import { getAuthenticatedUser, translateFactory } from "./constants";

// Translate module
export const translateProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: translateFactory, 
    deps: [TranslateService],
    multi: true
} 

// Interceptors
export const loaderBarInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
}
export const tokenInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
}
export const errorInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}
export const appInterceptors: Provider[] = [
    loaderBarInterceptorProvider, 
    tokenInterceptorProvider, 
    errorInterceptorProvider
];

// App initialization providers
export const getAutheticatedUserProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory:(authService:AuthService, store:Store<AuthState>) => () => getAuthenticatedUser(authService,store),
    deps:[AuthService, Store],
    multi:true
}
export const appIntializationProviders: Provider[] = [getAutheticatedUserProvider] 
