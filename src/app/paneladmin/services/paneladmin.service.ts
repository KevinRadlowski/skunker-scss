import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelAdminService {

  private paneladminUrl = 'http://localhost:8080/api/paneladmin';
  private accueilUrl = 'http://localhost:8080/api/accueil';

  constructor(private http: HttpClient) { }

  updateRecrutementValues(formValue): Observable<object> {
    return this.http.put(`${this.paneladminUrl}/update-recrutement`, formValue);
  }

  getRecrutementValues(id: number): Observable<object> {
    return this.http.get(`${this.paneladminUrl}/${id}`);
  }

  updateDiscordLink(discordLink): Observable<object> {
    return this.http.put(`${this.accueilUrl}/update-discord-link`, discordLink);
  }

  getDiscordLink(id: number): Observable<object> {
    return this.http.get(`${this.accueilUrl}/get-discord-link/${id}`);
  }
}
