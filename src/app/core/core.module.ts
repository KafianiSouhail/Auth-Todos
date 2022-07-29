import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { appInterceptors, translateModuleConfig, translateProvider } from './config';
import { appEffects, appReducers } from './state';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  imports: [
    TranslateModule.forRoot({...translateModuleConfig}),
    // Ngrx
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25}),
    // Ngx mask
    NgxMaskModule.forRoot(),
    // Toaster
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    // Loading bar
    LoadingBarHttpClientModule,
    LoadingBarModule
  ],
  exports:[
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule,
    TranslateModule,
    NgxMaskModule,
    ToastrModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarModule
  ],
  providers:[
    translateProvider,
    ...appInterceptors
  ]
})
export class CoreModule { }
