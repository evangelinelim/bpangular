import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './Player';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private apiUrl = 'http://localhost:5000/players';

  constructor(private http: HttpClient) { }
  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.apiUrl);
  }

  addPlayer(player: Player):Observable<Player> {
  return this.http.post<Player>(this.apiUrl, player, httpOptions);
  }
  updatePlayer(player: Player): Observable<Player> {
    const url = `${this.apiUrl}/${player.id}`;
    return this.http.put<Player>(url, player, httpOptions);
  }

}
