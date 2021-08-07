import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameapp',
  templateUrl: './gameapp.page.html',
  styleUrls: ['./gameapp.page.scss'],
})
export class GameappPage implements OnInit {
  games: any = [];
  searchTerm: string = '';

  constructor() {
    this.getGames();
  }

  ngOnInit() {}

  getGames() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '0332f04a9bmshaee349a73d6b849p198f8bjsnf7e2d6efa016',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.games = data;
      });
  }
}
