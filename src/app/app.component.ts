import { Component } from '@angular/core';

import { PoMenuItem, PoNavbarIconAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [*AppBar]
  readonly navActions: Array<PoNavbarIconAction> = [
    { icon:'po-icon po-icon-home', label: 'Home', link: '/' },
    { icon:'po-icon po-icon-gift', label: 'Aniversários', link: '/nivers' },
    { icon:'po-icon po-icon-share', label: 'Getter/Setter', link: '/hooks' }
  ];

  // [*MainMenu]
  readonly menus: Array<PoMenuItem> = [
    { icon:'po-icon po-icon-home', label: 'Home', link: '/' },
    { icon:'po-icon po-icon-gift', label: 'Aniversários', link: '/nivers' },
    { icon:'po-icon po-icon-share', label: 'Getter/Setter', link: '/hooks' }
  ];

  // private onClick() { alert('Clicked in menu item') }
  // readonly navActions: Array<PoNavbarIconAction> = [
  //   { icon:'po-icon po-icon-home', label: 'Home', action: it => { this.onClick() } },
  //   { icon:'po-icon po-icon-gift', label: 'Aniversários', action: it => { this.onClick() }  },
  //   { icon:'po-icon po-icon-share', label: 'Hooks', action: it => { this.onClick() }  }
  // ];
}
