import { NgModule } from '@angular/core';
import { appIntializationProviders, translateProvider } from './core/config';



@NgModule({
  providers:[
    translateProvider,
    ...appIntializationProviders
  ]
})
export class AppInitializationModule { }
