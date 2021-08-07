import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
  rapidapi_key = '0332f04a9bmshaee349a73d6b849p198f8bjsnf7e2d6efa016';

  constructor(private http: HttpClient) {}

  getDetails(id) {
    return this.http.get(
      `${this.url}?rapidapi-key=${this.rapidapi_key}&id=${id}`
    );
  }
}
