import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/music.interfaces';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  title: string;
  favoritesGroup: Array<Group>;

  constructor(
    private _musicService: MusicService
  ) {
    this.favoritesGroup = [];
  }

  ngOnInit(): void {
    this._musicService.groups().subscribe(
      (response) => {
        this.favoritesGroup = response.filter((g) => { return g.favorite });
        this.title = `Mis favoritos (${this.favoritesGroup.length})`
      }
    );
  }

}
