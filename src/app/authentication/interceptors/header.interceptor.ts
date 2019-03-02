import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
//
import { AuthenticationService } from '@app/authentication/services';
import { AuthConstants } from '@app/authentication/constants';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log(req);
        const token: string = this.authService.getToken();

        //return next.handle(req);
        if (token) {
            req = req.clone({ headers: req.headers.set(AuthConstants.LOCAL_STORAGE_SESSION_KEY, token) });
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}
