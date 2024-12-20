import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component'; // Menu bileşenini ekledik

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent], // MenuComponent'i imports listesine ekliyoruz
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
