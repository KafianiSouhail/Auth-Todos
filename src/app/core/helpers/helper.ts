import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { TodoType } from "src/app/features/todos/models/interfaces";
import { ApiHttpService } from "../adapters";
import { NGX_LOADING_BAR_IGNORED } from "@ngx-loading-bar/http-client";
import { HttpContext } from "@angular/common/http";
import { Language } from "../models/interfaces";

@Injectable({providedIn: 'root'})
export class Helper{
    readonly ignoreLoaderInHttp = {
        context: new HttpContext().set(NGX_LOADING_BAR_IGNORED, true)
    }
    constructor(private http:ApiHttpService){}

    fetchTodoTypes(cb:(todoTypes: TodoType[]) => void):void{
        this.http.get<TodoType[]>('assets/data/todo-types.json',{...this.ignoreLoaderInHttp})
        .pipe(tap(cb))
        .subscribe();
    }

    fetchLanguages(cb:(languages: Language[]) => void):void{
        this.http.get<Language[]>('assets/data/languages.json',{...this.ignoreLoaderInHttp})
        .pipe(tap(cb))
        .subscribe();
    }
}