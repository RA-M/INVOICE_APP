import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isNavbarOpen = false;
  isDropdownOpen = false;

  dropdownItems = [
    { label: 'Action', routerLink: '/action' },
    { label: 'Another action', routerLink: '/another-action' },
    // Add more items as needed
  ];
  
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }
}
