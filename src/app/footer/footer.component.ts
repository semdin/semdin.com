import { Component } from '@angular/core';
import { SocialMediaComponent } from './social-media/social-media.component'; // SocialMedia bileşenini ekledik

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaComponent], // SocialMediaComponent'i imports listesine ekliyoruz
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
