import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../ui.service';
import { PlayersService } from '../players.service';
import { FormGroup } from '@angular/forms';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Player } from '../Player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  showOptions: boolean;
  playerForm: FormGroup;
  players: Player[]=[];
  name: string = '';
  subscription: Subscription;
  faUserCircle = faUserCircle;
  @Output() savedPlayers = new EventEmitter<Player[]>();

  currentPlayer: {
    name: string;
    highScore: number;
  }

  constructor(private uiService: UiService, private playersService: PlayersService) {
    this.subscription = this.uiService.onToggleOptions().subscribe((value) => this.showOptions = value);
    this.playersService.getPlayers().subscribe((players) => this.players = players);

 }

  ngOnInit(): void {
    
  }
 
  saveHighScore(highScore: number) {
    
    if (!this.currentPlayer) {
      this.currentPlayer = {
        name: this.name,
        highScore: highScore,
      }
      this.players.push(this.currentPlayer);
      this.playersService.addPlayer(this.currentPlayer).subscribe((player) => this.currentPlayer = player);
    }
    if (this.currentPlayer.highScore < highScore) {
      this.currentPlayer.highScore = highScore;
      this.playersService.updatePlayer(this.currentPlayer).subscribe((player) => this.currentPlayer = player);
}
    this.playersService.getPlayers().subscribe((players) => this.players = players);
    this.players = this.players.sort((p1, p2) => p2.highScore - p1.highScore);
    this.savedPlayers.emit();
  }

  toggleOptions() {
    this.uiService.toggleOptions();
  }

  onSubmit() {
    if (!this.name) {
      alert("This field is required!")
      return;
    }
    this.toggleOptions();
    this.currentPlayer = this.players.find(player => this.name == player.name);
  }
}
