import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule], // CommonModule eklendi
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() tags!: string[];
}
