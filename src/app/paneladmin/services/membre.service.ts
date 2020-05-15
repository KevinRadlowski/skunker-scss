import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  getMembre(username: String): Observable<object> {
    return this.http.get(`${this.baseUrl}/getone/${username}`);
  }

  getAdminMembre(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/adminget/${id}`);
  }

  updateMembre(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateMembrePassword(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/password/${id}`, value);
  }

  getMembreList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteUser(username: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteuser/${username}`);
  }
}
