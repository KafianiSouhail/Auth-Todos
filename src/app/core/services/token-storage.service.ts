import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { storageService } from "../adapters/storage.service";
import { StorageKeys } from "../models/enums";
@Injectable({providedIn: 'root'})
export class TokenStorageService{

    constructor(private storageService:storageService){}

    //Access toekn
    saveAccessToken(accessToken:string):void{
        this.storageService.setItem(StorageKeys.ACCESS_TOKEN,accessToken);
    }
    getAccessToken():string{
        const ACCESS_TOEKN:string = this.storageService.getItem(StorageKeys.ACCESS_TOKEN);
        return ACCESS_TOEKN;
    }
    removeAccessToekn():void{
        this.storageService.removeItem(StorageKeys.ACCESS_TOKEN);
    }
}