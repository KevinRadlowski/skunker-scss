import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RosterMembre } from '../models/Roster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanelAdminService {

  private readonly prefixRecrutement = '/recrutement';
  private readonly prefixRoster = '/roster';
  private readonly prefixAccueil = '/accueil';

  constructor(private http: HttpClient) { }

  /*
      RECRUTEMENT
  */

  updateRecrutementValues(formValue): Observable<object> {
    return this.http.put(`${environment.api}${this.prefixRecrutement}/update-recrutement`, formValue);
  }

  getRecrutementValues(id: number): Observable<object> {
    return this.http.get(`${environment.api}${this.prefixRecrutement}/get-recrutement/${id}`);
  }

  /*
      ACCUEIL
  */

  updateDiscordLink(discordLink): Observable<object> {
    return this.http.put(`${environment.api}${this.prefixAccueil}/update-discord-link`, discordLink);
  }

  getDiscordLink(id: number): Observable<object> {
    return this.http.get(`${environment.api}${this.prefixAccueil}/get-discord-link/${id}`);
  }

  /*
      ROSTER
  */

  postRosterMember(formValue: RosterMembre): Observable<RosterMembre> {
    return this.http.post<RosterMembre>(`${environment.api}${this.prefixRoster}/post-roster-member`, formValue);
  }

  getRosterMember(id: number): Observable<object> {
    return this.http.get(`${environment.api}${this.prefixRoster}/${id}`);
  }

  updateRosterMember(id: number, value: RosterMembre): Observable<RosterMembre> {
    return this.http.put<RosterMembre>(`${environment.api}${this.prefixRoster}/${id}`, value);
  }

  getRosterMemberList(): Observable<RosterMembre[]> {
    return this.http.get<RosterMembre[]>(`${environment.api}${this.prefixRoster}/roster-membre-list`);
  }

  deleteRosterMember(id: number): Observable<any> {
    return this.http.delete(`${environment.api}${this.prefixRoster}/${id}`);
  }
}
