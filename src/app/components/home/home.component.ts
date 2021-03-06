import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Group } from '../../interfaces/music.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groups: Array<Group>;

  constructor(
    private _musicService: MusicService
  ) {}

  ngOnInit(): void {
    this._musicService.groups().subscribe(
      (response) => {
        this.groups = response;
      }
    );
  }

}
