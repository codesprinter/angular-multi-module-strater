import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginRequest } from '../models';
import { AuthConstants } from '../constants'
import { ApiService, ApiListService } from '@app/core';
import { LoginResponse } from '../models';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationService {

  private tokenKey: string = AuthConstants.LOCAL_STORAGE_SESSION_KEY;

  constructor(private router: Router,
              private http: HttpClient,
              private apiService: ApiService,
              private apiListService: ApiListService) { }

  public login( request: LoginRequest ) : Observable<LoginResponse> {
       const loginUrl: string = this.apiListService.getLoginUrl();
      // return this.apiService.post<LoginRequest>(loginUrl, JSON.stringify(request))
      //   .pipe(map((respons: HttpResponse<LoginResponse>) => {
      //       if ( respons.status == 200 ) {
      //           const responseData = <LoginResponse>respons.body;
      //           const record = responseData.object;
      //           if (record && record.token) {
      //               this.setToken(record.token);
      //           }
      //         }   
      //       return respons;   
      //   }));
      return this.apiService.post<LoginResponse>(loginUrl, JSON.stringify(request))
          .pipe(map(response => {
              this.setToken(response.object.token);
              return response;
          }));
  }

  logout() {
    this.removeToken();
    this.router.navigate(['login']);
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }

  isAuthenticated() {
    let token = localStorage.getItem(this.tokenKey);
    
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  refreshToken() {
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
