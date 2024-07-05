import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesStoreService {
  private apiUrl = 'http://localhost:5277/api/Games';

  constructor(private http: HttpClient) { }

  getGames(search?: string, category?: string): Observable<any[]> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }
    if (category) {
      params = params.set('category', category);
    }
    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map(games => games.map(game => ({
        ...game,
        descripcion: game.descripción
      })))
    );
  }
}
