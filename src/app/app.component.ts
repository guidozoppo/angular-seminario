import { Component } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _musicService: MusicService
  ) {
    this._musicService.loadGroups();
  }
}