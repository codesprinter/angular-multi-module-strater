import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class ApiListService {

  constructor() { }
  //private variable for route url
  private readonly LOGIN_API_URL: string = "user/login";
  //public method
  public getLoginUrl(): string{
      return `${environment.apiEndpoint}/${this.LOGIN_API_URL}`;
  }
}
