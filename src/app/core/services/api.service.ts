import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  get<T>(url: string): Observable<T> {
      return this.httpClient.get<T>(url);
  }

  getWithParam<T>(url: string, queryParam: HttpParams): Observable<T> {
      return this.httpClient.get<T>(url, { params: queryParam });
  }

  post<T>(url: string, body: string): Observable<T> {
      return this.httpClient.post<T>(url, body);
  }

  put<T>(url: string, body: string): Observable<T> {
      return this.httpClient.put<T>(url, body);
  }

  delete<T>(url: string): Observable<T> {
      return this.httpClient.delete<T>(url);
  }

  patch<T>(url: string, body: string): Observable<T> {
      return this.httpClient.patch<T>(url, body);
  }
}
