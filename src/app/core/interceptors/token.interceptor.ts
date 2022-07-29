import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TOKEN_TYPE } from "../config";
import { TokenStorageService } from "../services/token-storage.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private tokenStorageService:TokenStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const TOKEN:string = this.tokenStorageService.getAccessToken();
        if(TOKEN)  return next.handle(this.addTokenInRequestHeader(req,TOKEN));
        return next.handle(req);
    }

    addTokenInRequestHeader(req: HttpRequest<any>, token: string):HttpRequest<any>{
        const newRequest: HttpRequest<any> = req.clone({
            setHeaders:{
                authorization:`${TOKEN_TYPE} ${token}`
            }
        });
        return newRequest;
    }

}