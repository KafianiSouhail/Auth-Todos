import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { catchError, tap } from "rxjs";
import { AuthState, signinSuccess } from "src/app/features/auth/state";
import { AuthService } from "../services/auth.service";

// Token
export const TOKEN_TYPE:string = 'Bearer';

// Translate module
export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const translateModuleConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    },
    defaultLanguage: 'en'
}

export const translateFactory = (translate: TranslateService) => {
            return ():Promise<any> => {
                return new Promise(resolve => {
                    translate.use('en');
                    translate.onLangChange.subscribe(() => resolve('DUMMY_VALUE'));
                });
            }
}

// Ngx Loading bar
export const loadingBarConfig = {
    diameter: '35px',
    color: '#ff1493'
}

// App initialization factories
export const getAuthenticatedUser = (authService:AuthService,store:Store<AuthState>) => {
  return authService.getAuthenticatedUser().pipe(tap(user => store.dispatch(signinSuccess({user}))));
}




