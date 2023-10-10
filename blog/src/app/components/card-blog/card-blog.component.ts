import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent implements OnInit{
  ngOnInit(): void {
    
  }
  @Input() post_title?: string;
  @Input() post_date?: string;
  @Input() post_resume?: string;
  @Input() post_photo?: string = 'http://localhost:4200/assets/blog-post-img-blue.jpg';
}
