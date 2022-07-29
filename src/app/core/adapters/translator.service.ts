import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class TranslatorService{

    constructor(private translateService:TranslateService){}

    translate(path:string,params:Object={}):string{
        return this.translateService.instant(path,params);
    }

    setLanguage(language: string):void{
        this.translateService.use(language);
    }
}