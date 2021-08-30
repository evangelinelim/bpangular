import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BalloonComponent } from './balloon/balloon.component';
import { PlayersComponent } from './players/players.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { OptionsComponent } from './options/options.component';
import { OrderByScorePipe } from './scoreboard.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BalloonComponent,
    PlayersComponent,
    ScoreboardComponent,
    OptionsComponent,
    OrderByScorePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
