import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Group } from '../interfaces/music.interfaces';

@Injectable()
export class MusicService {

    private _groups: Array<Group>;
    private $groups: BehaviorSubject<Group[]>;

    constructor(
        private http: HttpClient
    ) {
        this._groups = [];
        this.$groups = new BehaviorSubject<Group[]>(this._groups);
    }

    loadGroups(): void {
        this.getGroups().then(
            (response: { groups: Array<Group> }) => {
                this._groups = response.groups.map(
                    (group) => {
                        group.favorite = false;
                        return group;
                    }
                );
                this.nextGroups();
            }
        );
    }

    private getGroups(): Promise<any> {
        return this.http.get('./assets/data/music-groups.json').toPromise();
    }

    private nextGroups(): void {
        this.$groups.next(this._groups);
    }

    groups(): Observable<Group[]> {
        return this.$groups.asObservable();
    }

    changeFavorite(groupId: number): void {
        const index: number = this._groups.map((g) => { return g.id }).indexOf(groupId);
        if (index !== -1) {
            this._groups[index].favorite = !this._groups[index].favorite;
            this.nextGroups();
        }
    }

    getGroupById(groupId: number): Promise<any> {
        return this.getGroups().then(
            (response: { groups: Array<Group> }) => {
                return response.groups.filter((g) => { return g.id === groupId })[0];
            }
        );
    }

}