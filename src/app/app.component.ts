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
    { icon:'po-icon po-icon-home', label: 'Home', link: '/', tooltip: "Home" },
    { icon:'po-icon po-icon-gift', label: 'Aniversários', link: '/nivers', tooltip: "Aniversários" },
    { icon:'po-icon po-icon-share', label: 'Getter/Setter', link: '/hooks', tooltip: "Getter and Setter" },
    { icon:'po-icon po-icon-world', label: 'Customer - Rest', link: '/customer', tooltip: "Consumindo Rest" }
  ];

  // [*MainMenu]
  readonly menus: Array<PoMenuItem> = [
    { icon:'po-icon po-icon-home', label: 'Home', link: '/' },
    { icon:'po-icon po-icon-gift', label: 'Aniversários', link: '/nivers' },
    { icon:'po-icon po-icon-share', label: 'Getter/Setter', link: '/hooks' },
    { icon:'po-icon po-icon-world', label: 'Customer - Rest', link: '/customer' }
  ];

  // private onClick() { alert('Clicked in menu item') }
  // readonly navActions: Array<PoNavbarIconAction> = [
  //   { icon:'po-icon po-icon-home', label: 'Home', action: it => { this.onClick() } },
  //   { icon:'po-icon po-icon-gift', label: 'Aniversários', action: it => { this.onClick() }  },
  //   { icon:'po-icon po-icon-share', label: 'Hooks', action: it => { this.onClick() }  }
  // ];
}
