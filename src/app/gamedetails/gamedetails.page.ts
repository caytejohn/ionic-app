import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.page.html',
  styleUrls: ['./gamedetails.page.scss'],
})
export class GamedetailsPage implements OnInit {
  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.gameService.getDetails(id).subscribe((result) => {
      this.information = result;
    });
  }
}
