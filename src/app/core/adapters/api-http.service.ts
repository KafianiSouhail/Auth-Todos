import { HttpClient, HttpParamsOptions } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class ApiHttpService{

    constructor(private http:HttpClient){}

    get<T>(path:string,options:Object={}):Observable<T>{
        return  this.http.get<T>(`${path}`,options);
    }

    post<T>(path:string,body={},options={}):Observable<T>{
        return this.http.post<T>(`${path}`,body,options);
    }

    delete<T>(path:string,options:Object={}):Observable<T>{
        return  this.http.delete<T>(`${path}`,options);
    }

    put<T>(path:string,body={},options:Object={}):Observable<T>{
        return  this.http.put<T>(`${path}`,body,options);
    }
}