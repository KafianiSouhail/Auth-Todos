import { Injectable } from "@angular/core";
import { StorageKeys } from "../models/enums";

@Injectable({providedIn:'root'})
export class storageService{

    setItem(key:StorageKeys, item:any):void{
        localStorage.setItem(`${StorageKeys.APP_STORAGE_PREFIX}${key}`,item);
    }

    getItem(key:StorageKeys):any{
        return localStorage.getItem(`${StorageKeys.APP_STORAGE_PREFIX}${key}`);
    }

    removeItem(key:StorageKeys){
        localStorage.removeItem(`${StorageKeys.APP_STORAGE_PREFIX}${key}`)
    }

    clearAll():void{
        localStorage.clear();
    }
}