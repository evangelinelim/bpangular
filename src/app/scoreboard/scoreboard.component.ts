import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { UiService } from '../ui.service';
import { PlayersService } from '../players.service';
import { Player } from '../Player';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { OrderByScorePipe } from '../scoreboard.pipe';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})

export class ScoreboardComponent implements OnInit {
  showGame: boolean;
  players: Player[] = [];
  subscription: Subscription;
  faUser = faUser;

  constructor(private uiService: UiService, private playersService: PlayersService) {
    this.subscription = this.uiService.onStartGame().subscribe((value) => this.showGame = value);
    
}
  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players) => this.players = players);
  }
  
  
  loadScoreboard(): Player[] {
    this.playersService.getPlayers().subscribe((players) => this.players = players);
    return this.players; 
  }
}