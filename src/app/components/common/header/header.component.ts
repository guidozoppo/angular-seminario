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
        name: 'Inicio',
        routerLink: ['/']
      },
      {
        name: 'Mis favoritos',
        routerLink: ['/favorites']
      }
    ];
  }

}
