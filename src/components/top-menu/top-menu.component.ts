import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
  isActive = false;

  // Toggle menu opened and closed
  toggleActive() {
    this.isActive = !this.isActive;
  }
}
