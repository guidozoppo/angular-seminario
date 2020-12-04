import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../../services/music.service';
import { Group } from '../../interfaces/music.interfaces';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {

  title: string;
  group: Group;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _musicService: MusicService
  ) {}

  ngOnInit(): void {
    const groupId: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._musicService.getGroupById(groupId).then(
      (response: Group) => {
        if (response) {
          this.group = response;
        } else {
          this.router.navigate(['']);
        }
      },
      (error) => { console.log(error); }
    )
  }

  changeFavorite(groupId: number): void {
    this._musicService.changeFavorite(groupId);
  }

}
