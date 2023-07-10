import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menu:String = "none";

  showMenu() {
    if (this.menu == "none") {
      this.menu = "flex";
    } else {
      this.menu = "none";
    }
  }
    
}