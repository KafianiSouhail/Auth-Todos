import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, pluck } from "rxjs";
import { ApiHttpService } from "src/app/core/adapters";
import { Page } from "src/app/core/models/interfaces";
import { environment } from "src/environments/environment";
import { FetchTodosResponse, TodoPyload, TodoResponse } from "../models";
import { Todo } from "../models/classes";

@Injectable({providedIn: 'root'})
export class TodoService{
    readonly url: string = `${environment.apiBaseUrl}todos`;
    constructor
    (
        private http: ApiHttpService
    )
    {}

    add(todo:TodoPyload):Observable<any>{
        const body = { data: { ...todo } };
        return this.http.post(this.url, body);
    }

    fetch(page: Page, shouldMatch:string):Observable<FetchTodosResponse>{
        const queryParamsFilter: string = `?filters[title][$eq]=${shouldMatch}`;
        const params:HttpParams = new HttpParams()
            .append('pagination[page]', page.index)
            .append('pagination[pageSize]', page.size);
        let _url = this.url;
        if(shouldMatch) _url = `${this.url}${queryParamsFilter}`;
        return this.http.get<FetchTodosResponse>(_url, params);
    }
}