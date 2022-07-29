import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { ToastrService } from "ngx-toastr";
import { NotifactionClassNames } from "../models/enums";
import { TranslatorService } from "./translator.service";

@Injectable({providedIn:'root'})
export class MyNotificationService{
    readonly DEFAULT_DURATION:number = 2000;
    constructor(private _snackBar: MatSnackBar, private translatorService:TranslatorService){}

    openSuccess(msgPath:string, options:{duration?:number}): void{
        options = Object.assign(options, {duration: this.DEFAULT_DURATION});        
        const config = new MatSnackBarConfig();
        config.panelClass = [NotifactionClassNames.SUCCESS];
        config.duration = options.duration;
        this._snackBar.open(this.translatorService.translate(msgPath), 'SUCCESS', config);
    }

    openError(msgPath:string, options:{duration?:number}): void{
        options = Object.assign(options, {duration: this.DEFAULT_DURATION});        
        const config = new MatSnackBarConfig();
        config.panelClass = [NotifactionClassNames.ERROR];
        config.duration = options.duration;
        this._snackBar.open(this.translatorService.translate(msgPath), 'ERROR', config);
    }
    
}