import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { NGX_LOADING_BAR_IGNORED } from "@ngx-loading-bar/http-client";
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    loaderRef:any;
    constructor(private loader: LoadingBarService){
        this.loaderRef = this.loader.useRef('http');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        if(this.shouldShowLoaderInRequest(req)) {
            this.loaderRef.start();
            return next.handle(req).pipe(this.handleLoader.bind(this));
        }
        return next.handle(req);
        
    }

    shouldShowLoaderInRequest(req:HttpRequest<any>):boolean{
        return !(req.context.get(NGX_LOADING_BAR_IGNORED) === true);
    }

    handleLoader(source:Observable<any>):Observable<any>{
        return source.pipe(finalize(() => this.loaderRef.complete()));
    }
}