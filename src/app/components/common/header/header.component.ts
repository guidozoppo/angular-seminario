import { Component } from '@angular/core';
import { NavItem } from '../../../interfaces/nav.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItems: Array<NavItem>;

  constructor() {
    this.navItems = [
      {
        name: 'inicio',
        routerLink: ['/']
      },
      {
        name: 'mis favoritos',
        routerLink: ['/favorites']
      }
    ];
  }

}
