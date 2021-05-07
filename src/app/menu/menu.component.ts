import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
showMenu:boolean = false;
changed:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }
toggleMenu() {
this.showMenu = !this.showMenu;
}
 myFunction(x) {
  this.changed = !this.changed;
}

}
