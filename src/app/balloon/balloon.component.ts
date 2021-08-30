import { Component, OnInit,Output, EventEmitter, ViewChild, ElementRef, Renderer2, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { BalloonService } from '../balloon.service';
import { PlayersService } from '../players.service';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-balloon',
  templateUrl: './balloon.component.html',
  styleUrls: ['./balloon.component.css'],
})
export class BalloonComponent implements OnInit {
  count: number = 0;
  balloonsPop: number=0;
  showGame: boolean;
  showOptions: boolean;
  timeRemaining: number=0;
  gameLength:number= 10000;
  clockID: any;
  highScore: number;
  subscription: Subscription;
  subscription2: Subscription;
  @Output() topScore = new EventEmitter<number>();

  balloonObj = {
    height: 120,
    width: 100
  }

  //@ViewChild('balloon') balloon: ElementRef;
  

  constructor(private balloonService: BalloonService, private uiService: UiService, private playersServices: PlayersService) {
    this.subscription = this.uiService.onStartGame().subscribe((value) => this.showGame = value);
    this.subscription2 = this.uiService.onToggleOptions().subscribe((value) => this.showOptions = value);
  }

  ngOnInit(): void {
  }

 
  startGame() {
    this.startClock();
    setTimeout(() => { this.stopGame() }, this.gameLength);
  }

  inflateBalloon() {
    this.balloonObj.height += 10;
    this.balloonObj.width += 10;
    this.count++;
    this.checkPop();
  
  }


  checkPop() {
    if (this.balloonObj.height >= 200) {
      this.balloonsPop++;
      this.balloonObj.width = -15;
      this.balloonObj.height = 0;
    }

  }

  startClock() {
    this.timeRemaining = this.gameLength;
    this.clockID = setInterval ((remain)=> remain = (this.timeRemaining -= 1000),1000);
  }

  stopClock() {
    clearInterval(this.clockID);
}
  
 
  stopGame() {
    this.stopClock();
    this.highScore = this.balloonsPop;
    this.count = 0;
    this.balloonObj = {
      height: 120,
      width:100
    }
    this.balloonsPop = 0;
    this.topScore.emit(this.highScore);
    this.uiService.toggleGame();
  }
}
