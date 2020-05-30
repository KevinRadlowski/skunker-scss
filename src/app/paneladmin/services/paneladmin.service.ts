import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RosterMembre } from '../models/Roster.model';

@Injectable({
  providedIn: 'root'
})
export class PanelAdminService {

  private recrutementUrl = 'http://localhost:8080/api/recrutement';
  private rosterUrl = 'http://localhost:8080/api/roster';
  private accueilUrl = 'http://localhost:8080/api/accueil';

  constructor(private http: HttpClient) { }

  /*
      RECRUTEMENT
  */

  updateRecrutementValues(formValue): Observable<object> {
    return this.http.put(`${this.recrutementUrl}/update-recrutement`, formValue);
  }

  getRecrutementValues(id: number): Observable<object> {
    return this.http.get(`${this.recrutementUrl}/get-recrutement/${id}`);
  }

  /*
      ACCUEIL
  */

  updateDiscordLink(discordLink): Observable<object> {
    return this.http.put(`${this.accueilUrl}/update-discord-link`, discordLink);
  }

  getDiscordLink(id: number): Observable<object> {
    return this.http.get(`${this.accueilUrl}/get-discord-link/${id}`);
  }

  /*
      ROSTER
  */

  postRosterMember(formValue: RosterMembre): Observable<RosterMembre> {
    return this.http.post<RosterMembre>(`${this.rosterUrl}/post-roster-member`, formValue);
  }

  getRosterMember(id: number): Observable<object> {
    return this.http.get(`${this.rosterUrl}/${id}`);
  }

  updateRosterMember(id: number, value: RosterMembre): Observable<RosterMembre> {
    return this.http.put<RosterMembre>(`${this.rosterUrl}/${id}`, value);
  }

  getRosterMemberList(): Observable<RosterMembre[]> {
    return this.http.get<RosterMembre[]>(`${this.rosterUrl}/roster-membre-list`);
  }

  deleteRosterMember(id: number): Observable<any> {
    return this.http.delete(`${this.rosterUrl}/${id}`);
  }
}
