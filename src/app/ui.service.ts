import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showOptions: boolean = false;
  private showGame: boolean = false;
  private hideOption: boolean = false;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();
  private subject3 = new Subject<any>();

  constructor() { }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
    this.subject.next(this.showOptions);
  }

  toggleGame(): void {
    this.showGame = !this.showGame;
    this.subject2.next(this.showGame);
  }

  onToggleOptions(): Observable<any> {
    return this.subject.asObservable();
  }

  onStartGame(): Observable<any> {
    return this.subject2.asObservable();
  }
  
  toggleHideOption(): void {
    this.hideOption = !this.hideOption;
    this.subject2.next(this.hideOption);
  }

  onHideOptions(): Observable<any> {
    return this.subject3.asObservable();
  }
}
