import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppRouterLink } from '@app/core/constants';
import { AuthenticationService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router
        , private authService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let shouldActive: boolean = false;
        //
        console.log(this.authService.getToken());
        if (this.authService.getToken()) {
            // logged in so return true
            // this._router.navigate(['/customer-list']);
            shouldActive = true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate([`/${AppRouterLink.LOGIN}`], { queryParams: { returnUrl: state.url }});
            shouldActive = false;
        }
        return shouldActive;
    }
}
