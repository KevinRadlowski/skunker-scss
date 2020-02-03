import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  private baseUrl = 'http://localhost:8080/api/membre';

  constructor(private http: HttpClient) { }

  getMembre(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/getone/${username}`);
  }

  getAdminMembre(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/adminget/${id}`);
  }
  createMembre(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/creer`, customer);
  }

  updateMembre(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateMembrePassword(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/password/${id}`, value);
  }

  getMembreList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteUser(username: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteuser/${username}`);
  }
}
