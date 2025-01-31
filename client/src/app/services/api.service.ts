import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/home/page-content'; // Use the proxy endpoint

  constructor(private http: HttpClient) {}

  getStaticContent(param: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${param}`);
  }
}