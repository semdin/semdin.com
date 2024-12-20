import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from '../../shared/blog-post/blog-post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BlogPostComponent], // CommonModule eklendi
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  blogPosts = [
    {
      title: 'First Blog Post',
      image:
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      description: 'This is the first blog post description.',
      tags: ['Fashion', 'News'],
    },
    {
      title: 'Second Blog Post',
      image:
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      description: 'This is the second blog post description.',
      tags: ['Technology', 'Updates'],
    },
  ];
}
