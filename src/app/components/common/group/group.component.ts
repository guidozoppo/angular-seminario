import { Component, Input } from '@angular/core';
import { Group } from 'src/app/interfaces/music.interfaces';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  @Input() group: Group;

  constructor(
    private _musicService: MusicService
  ) { }

  changeFavorite(groupId: number): void {
    this._musicService.changeFavorite(groupId);
  }

}
