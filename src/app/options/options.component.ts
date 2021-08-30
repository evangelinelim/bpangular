import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from '../ui.service';
import { PlayersService } from '../players.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  showGame: boolean;
  showOptions: boolean;
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  @Output() clickStartGame = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleOptions().subscribe((value) => this.showOptions = value);
    this.subscription2 = this.uiService.onStartGame().subscribe((value) => this.showGame = value);

  }

  //use router link to go back to player page

  ngOnInit(): void {
  }

  startGame() {
    this.uiService.toggleGame();
    this.clickStartGame.emit();
  }

  changePlayer() {
    this.uiService.toggleOptions();
    if (this.showGame) {
      
      this.uiService.toggleGame();
    }
  }
}
